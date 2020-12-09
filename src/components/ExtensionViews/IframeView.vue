<template>
  <span :class="iframeViewClass">
    <div
      :class="{
        'iframe-view__body--focused': selected,
        'iframe-view__body--resizing': resizing,
      }"
      class="iframe-view__body"
      @click="selectIframe"
    >
      <iframe ref="iframe"
              class="iframe-view__body__embed"
              :src="src"
              :width="width"
              :height="height"
      />

      <div
        v-if="view.editable"
        v-show="selected || resizing"
        class="iframe-resizer"
      >
        <span
          v-for="direction in resizeDirections"
          :key="direction"
          :class="`iframe-resizer__handler--${direction}`"
          class="iframe-resizer__handler"
          @mousedown="onMouseDown($event, direction)"
        />
      </div>

      <!-- when iframe is break text or float
      bubble menu's position is miscalculated
      use el-popover instead bubble menu -->
            <el-popover
              :value="selected"
              :visible-arrow="false"
              placement="top"
              trigger="manual"
              popper-class="el-tiptap-iframe-popper"
            >
              <iframe-bubble-menu
                :node="node"
                :view="view"
                :update-attrs="updateAttrs"
              />

              <div
                slot="reference"
                class="iframe-view__body__placeholder"
              />
            </el-popover>
    </div>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { NodeSelection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { ResizeObserver } from '@juggle/resize-observer';
import { clamp } from '@/utils/shared';
import { Popover } from 'element-ui';
import IframeBubbleMenu from '@/components/MenuBubble/IframeBubbleMenu.vue';

const enum ResizeDirection {
  TOP_LEFT = 'tl',
  TOP_RIGHT = 'tr',
  BOTTOM_LEFT = 'bl',
  BOTTOM_RIGHT = 'br',
}

const MIN_WIDTH = 300;

const MIN_HEIGHT = 250;
const MAX_HEIGHT = 9000;

  @Component({
    components: {
      [Popover.name]: Popover,
      IframeBubbleMenu,
    },
  })
export default class IframeView extends Vue {
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
      width: 0,
      height: MAX_HEIGHT,
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

    private get src (): string {
      return this.node.attrs.src;
    }

    private get width (): number {
      return this.node.attrs.width;
    }

    private get height (): number {
      return this.node.attrs.height;
    }

    private get iframeViewClass () {
      return [
        'iframe-view'
      ];
    }

    private async created () {
      // Without timeout all crashes
      setTimeout(() => {
        if (this.maxSize.width === 0) {
          this.getMaxSize();
        }

        if (this.width && this.width > this.maxSize.width) {
          this.updateAttrs({
            width: this.maxSize.width
          });
        }

        // if (!this.height) {
        //   this.updateAttrs({
        //     height: MIN_HEIGHT
        //   });
        // }
      }, 10);
    }

    private mounted () {
      this.resizeOb.observe(this.view.dom);
    }

    private beforeDestroy () {
      this.resizeOb.disconnect();
    }

    // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541
    private selectIframe () {
      const { state } = this.view;
      let { tr } = state;
      const selection = NodeSelection.create(state.doc, this.getPos());
      tr = tr.setSelection(selection);
      this.view.dispatch(tr);
    }

    /* invoked when window or editor resize */
    private getMaxSize () {
      const { width } = getComputedStyle(this.view.dom);
      this.maxSize.width = parseInt(width, 10);
    }

    // /* on resizer handler mousedown
    //  * record the position where the event is triggered and resize direction
    //  * calculate the initial width and height of the iframe
    //  */
    private onMouseDown (e: MouseEvent, dir: ResizeDirection): void {
      e.preventDefault();
      e.stopPropagation();

      this.resizerState.x = e.clientX;
      this.resizerState.y = e.clientY;

      const originalWidth = this.width;
      const originalHeight = this.height;

      this.resizerState.w = originalWidth;
      this.resizerState.h = originalHeight;
      this.resizerState.dir = dir;

      this.resizing = true;

      this.onEvents();
    }

    //
    private onMouseMove (e: MouseEvent): void {
      e.preventDefault();
      e.stopPropagation();
      if (!this.resizing) return;

      const { x, y, w, h, dir } = this.resizerState;

      const dx = (e.clientX - x) * (/l/.test(dir) ? -1 : 1);
      const dy = (e.clientY - y) * (/t/.test(dir) ? -1 : 1);

      const newWidth = clamp(w + dx, MIN_WIDTH, this.maxSize.width);
      const newHeight = clamp(h + dy, MIN_HEIGHT, this.maxSize.height);

      this.updateAttrs({
        width: newWidth,
        height: newHeight
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
      this.selectIframe();
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
