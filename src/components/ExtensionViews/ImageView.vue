<template>
  <span
    :class="imageViewClass"
  >
    <div class="image-view__body">
      <img
        :src="node.attrs.src"
        :title="node.attrs.title"
        :alt="node.attrs.alt"
        :width="width"
        :height="height"
        class="image-view__body__image"
        @click="selectImage"
      >

      <div
        v-if="view.editable"
        v-show="selected || resizing"
        class="image-resizer"
      >
        <span
          v-for="direction in resizeDirections"
          :key="direction"
          :class="`image-resizer__handler--${direction}`"
          class="image-resizer__handler"
          @mousedown="onMouseDown($event, direction)"
        />

        <span
          class="image-view__delete-trigger"
          @click="removeImage"
        >
          <v-icon name="regular/trash-alt" />
        </span>
      </div>
    </div>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { NodeSelection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { deleteSelection } from 'prosemirror-commands';
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/regular/trash-alt';
import { resolveImg } from '@/utils/image';

const enum ResizeDirection {
  TOP_LEFT = 'tl',
  TOP_RIGHT = 'tr',
  BOTTOM_LEFT = 'bl',
  BOTTOM_RIGHT = 'br',
};

const MIN_SIZE = 20;

@Component({
  components: {
    'v-icon': Icon,
  },
})
export default class ImageView extends Vue {
  @Prop({
    type: ProsemirrorNode,
    required: true,
  })
  readonly node!: ProsemirrorNode;

  @Prop({
    type: EditorView,
    required: true,
  })
  readonly view!: EditorView;

  @Prop({
    type: Function,
    required: true,
  })
  readonly getPos!: Function;

  @Prop({
    type: Function,
    required: true,
  })
  readonly updateAttrs!: Function;

  @Prop({
    type: Boolean,
    required: true,
  })
  readonly selected!: boolean;

  originalSize = {
    width: 0,
    height: 0,
  };

  resizeDirections = [
    ResizeDirection.TOP_LEFT,
    ResizeDirection.TOP_RIGHT,
    ResizeDirection.BOTTOM_LEFT,
    ResizeDirection.BOTTOM_RIGHT,
  ];

  resizing = false;

  resizerState = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: '',
  };

  private get src (): string {
    return this.node.attrs.src;
  }

  private get width (): number {
    return this.node.attrs.width;
  }

  private get height (): number {
    return this.node.attrs.height;
  }

  private get imageViewClass () {
    return {
      'image-view': true,
      'image-view--focused': this.selected,
    };
  }

  private async created () {
    const result = await resolveImg(this.src);

    if (!result.complete) {
      result.width = MIN_SIZE;
      result.height = MIN_SIZE;
    }

    this.originalSize = {
      width: result.width,
      height: result.height,
    };
  }

  // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541
  private selectImage () {
    let tr = this.view.state.tr;
    const selection = NodeSelection.create(this.view.state.doc, this.getPos());
    tr = tr.setSelection(selection);
    this.view.dispatch(tr);
  }

  private removeImage () {
    const { state, dispatch } = this.view;
    deleteSelection(state, dispatch);
  }

  private onMouseDown (e: MouseEvent, dir: ResizeDirection): void {
    e.preventDefault();
    e.stopPropagation();

    this.resizerState.x = e.clientX;
    this.resizerState.y = e.clientY;

    const originalWidth = this.originalSize.width;
    const originalHeight = this.originalSize.height;
    const aspectRatio = originalWidth / originalHeight;

    let { width, height } = this.node.attrs;

    if (width && !height) {
      height = Math.round(width / aspectRatio);
    } else if (height && !width) {
      width = Math.round(height * aspectRatio);
    } else if (!width && !height) {
      width = originalWidth;
      height = originalHeight;
    }

    this.resizerState.w = width;
    this.resizerState.h = height;
    this.resizerState.dir = dir;

    this.resizing = true;

    this.onEvents();
  }

  private onMouseMove (e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    if (!this.resizing) return;

    const { x, y, w, h, dir } = this.resizerState;

    const dx = (e.clientX - x) * (/l/.test(dir) ? -1 : 1);
    const dy = (e.clientY - y) * (/t/.test(dir) ? -1 : 1);

    this.updateAttrs({
      width: Math.max(w + dx, MIN_SIZE),
      height: Math.max(h + dy, MIN_SIZE),
    });
  }

  private onMouseUp (e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    if (!this.resizing) return;

    this.resizing = false;

    this.resizerState = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: '',
    };

    this.offEvents();
    this.selectImage();
  }

  private onEvents (): void {
    document.addEventListener('mousemove', this.onMouseMove, true);
    document.addEventListener('mouseup', this.onMouseUp, true);
  }

  private offEvents (): void {
    document.removeEventListener('mousemove', this.onMouseMove, true);
    document.removeEventListener('mouseup', this.onMouseUp, true);
  }
};
</script>
