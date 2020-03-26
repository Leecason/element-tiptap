<template>
  <el-popover
    v-model="popoverVisible"
    placement="top"
    trigger="click"
    popper-class="el-tiptap-popper"
  >
    <div class="el-tiptap-popper__menu">
      <div
        :class="{ 'el-tiptap-popper__menu__item--active': inline }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="updateAttrs({ inline: true })"
      >
        <span>{{ t('editor.extensions.Image.buttons.display.inline') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--active': !inline }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="updateAttrs({ inline: false })"
      >
        <span>{{ t('editor.extensions.Image.buttons.display.break_text') }}</span>
      </div>
    </div>

    <command-button
      slot="reference"
      :tooltip="t('editor.extensions.Image.buttons.display.tooltip')"
      icon="regular/image"
    />
  </el-popover>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { Popover } from 'element-ui';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    [Popover.name]: Popover,
    CommandButton,
  },
})
export default class ImageDisplayCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: ProsemirrorNode,
    required: true,
  })
  readonly node!: ProsemirrorNode;

  @Prop({
    type: Function,
    required: true,
  })
  readonly updateAttrs!: Function;

  popoverVisible = false;

  private get inline () {
    return this.node.attrs.inline;
  }

  private hidePopover () {
    this.popoverVisible = false;
  }
}
</script>
