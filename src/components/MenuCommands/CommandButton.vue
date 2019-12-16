<template>
  <el-tooltip
    :content="tooltip"
    :visible-arrow="false"
    effect="dark"
    placement="top"
  >
    <div
      :class="classes"
      @mousedown.prevent
      @click="command"
    >
      <font-awesome-icon :icon="icon" />
    </div>
  </el-tooltip>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeading,
  faBold,
  faUnderline,
  faItalic,
  faStrikethrough,
  faLink,
  faImage,
  faCode,
  faQuoteRight,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faTextHeight,
  faListUl,
  faListOl,
  faCheckSquare,
  faIndent,
  faOutdent,
  faMinus,
  faUndo,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';
import { noop } from '@/utils/shared';

library.add(
  faHeading,
  faBold,
  faUnderline,
  faItalic,
  faStrikethrough,
  faLink,
  faImage,
  faCode,
  faQuoteRight,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faTextHeight,
  faListUl,
  faListOl,
  faCheckSquare,
  faIndent,
  faOutdent,
  faMinus,
  faUndo,
  faRedo,
);

export default {
  name: 'CommandButton',

  props: {
    icon: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    tooltip: {
      type: String,
      required: true,
    },

    command: {
      type: Function,
      default: noop,
    },
  },

  computed: {
    classes () {
      return {
        'el-tiptap-editor__command-button': true,
        'el-tiptap-editor__command-button--active': this.isActive,
      };
    }
  },
};
</script>

<style lang="scss">
.el-tiptap-editor {
  &__command-button {
    border: 1px solid transparent;
    align-items: center;
    border-radius: 50%;
    color: #606266;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 40px;
    margin: 2px;
    outline: 0;
    width: 40px;

    &:hover {
      background-color: #ecf5ff;
      color: #409EFF;
    }

    &--active {
      background-color: #ecf5ff;
      border-color: #b3d8ff;
      color: #409EFF;
    }
  }
}
</style>
