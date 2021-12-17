<template>
  <span :class="imageViewClass">
    <div
      :class="{
        'image-view__body--focused': selected,
        'image-view__body--resizing': resizing,
      }"
      class="image-view__body"
    >
      <img
        :src="src"
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
      </div>

      <!-- when image is break text or float
      bubble menu's position is miscalculated
      use el-popover instead bubble menu -->
      <el-popover
        :value="selected"
        :visible-arrow="false"
        placement="top"
        trigger="manual"
        popper-class="el-tiptap-image-popper"
      >
        <image-bubble-menu
          :node="node"
          :view="view"
          :update-attrs="updateAttrs"
        />

        <div
          slot="reference"
          class="image-view__body__placeholder"
        />
      </el-popover>
    </div>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Popover } from 'element-ui';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { NodeSelection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { ResizeObserver } from '@juggle/resize-observer';
import { resolveImg, ImageDisplay } from '@/utils/image';
import { clamp } from '@/utils/shared';
import ImageBubbleMenu from '../MenuBubble/ImageBubbleMenu.vue';

const enum ResizeDirection {
  TOP_LEFT = 'tl',
  TOP_RIGHT = 'tr',
  BOTTOM_LEFT = 'bl',
  BOTTOM_RIGHT = 'br',
};

const MIN_SIZE = 20;
const MAX_SIZE = 100000;

@Component({
  components: {
    [Popover.name]: Popover,
    ImageBubbleMenu,
  },
})
export default class ImageView extends Vue {
  @Prop({
    type: ProsemirrorNode,
    required: true,
  })
  readonly node!: ProsemirrorNode;

  @Prop({
    // TODO: EditorView type check failed
    // issue: https://github.com/Leecason/element-tiptap/issues/21#issuecomment-605615966
    type: Object,
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

  maxSize = {
    width: MAX_SIZE,
    height: MAX_SIZE,
  };

  originalSize = {
    width: 0,
    height: 0,
  };

  resizeOb = new ResizeObserver(() => {
    this.getMaxSize();
  });

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

  private get src(): string {
    return this.node.attrs.src;
  }

  private get width(): number {
    return this.node.attrs.width;
  }

  private get height(): number {
    return this.node.attrs.height;
  }

  private get display(): ImageDisplay {
    return this.node.attrs.display;
  }

  private get imageViewClass() {
    return [
      'image-view',
      `image-view--${this.display}`,
    ];
  }

  private async created() {
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

  private mounted() {
    this.resizeOb.observe(this.view.dom);
  }

  private beforeDestroy() {
    this.resizeOb.disconnect();
  }

  // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541
  private selectImage() {
    const { state } = this.view;
    let { tr } = state;
    const selection = NodeSelection.create(state.doc, this.getPos());
    tr = tr.setSelection(selection);
    this.view.dispatch(tr);
  }

  /* invoked when window or editor resize */
  private getMaxSize() {
    const { width } = getComputedStyle(this.view.dom);
    this.maxSize.width = parseInt(width, 10);
  }

  /* on resizer handler mousedown
   * record the position where the event is triggered and resize direction
   * calculate the initial width and height of the image
   */
  private onMouseDown(e: MouseEvent, dir: ResizeDirection): void {
    e.preventDefault();
    e.stopPropagation();

    this.resizerState.x = e.clientX;
    this.resizerState.y = e.clientY;

    const originalWidth = this.originalSize.width;
    const originalHeight = this.originalSize.height;
    const aspectRatio = originalWidth / originalHeight;

    let { width, height } = this.node.attrs;
    const maxWidth = this.maxSize.width;

    if (width && !height) {
      width = width > maxWidth ? maxWidth : width;
      height = Math.round(width / aspectRatio);
    } else if (height && !width) {
      width = Math.round(height * aspectRatio);
      width = width > maxWidth ? maxWidth : width;
    } else if (!width && !height) {
      width = originalWidth > maxWidth ? maxWidth : originalWidth;
      height = Math.round(width / aspectRatio);
    } else {
      width = width > maxWidth ? maxWidth : width;
    }

    this.resizerState.w = width;
    this.resizerState.h = height;
    this.resizerState.dir = dir;

    this.resizing = true;

    this.onEvents();
  }

  private onMouseMove(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    if (!this.resizing) return;

    const { x, y, w, h, dir } = this.resizerState;

    const dx = (e.clientX - x) * (/l/.test(dir) ? -1 : 1);
    const dy = (e.clientY - y) * (/t/.test(dir) ? -1 : 1);

    this.updateAttrs({
      width: clamp(w + dx, MIN_SIZE, this.maxSize.width),
      height: Math.max(h + dy, MIN_SIZE),
    });
  }

  private onMouseUp(e: MouseEvent): void {
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

  private onEvents(): void {
    document.addEventListener('mousemove', this.onMouseMove, true);
    document.addEventListener('mouseup', this.onMouseUp, true);
  }

  private offEvents(): void {
    document.removeEventListener('mousemove', this.onMouseMove, true);
    document.removeEventListener('mouseup', this.onMouseUp, true);
  }
};
</script>
