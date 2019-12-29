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
      <v-icon :name="icon"/>
    </div>
  </el-tooltip>
</template>

<script>
import 'vue-awesome/icons/heading';
import 'vue-awesome/icons/bold';
import 'vue-awesome/icons/underline';
import 'vue-awesome/icons/italic';
import 'vue-awesome/icons/strikethrough';
import 'vue-awesome/icons/link';
import 'vue-awesome/icons/image';
import 'vue-awesome/icons/code';
import 'vue-awesome/icons/quote-right';
import 'vue-awesome/icons/align-left';
import 'vue-awesome/icons/align-center';
import 'vue-awesome/icons/align-right';
import 'vue-awesome/icons/align-justify';
import 'vue-awesome/icons/text-height';
import 'vue-awesome/icons/list-ul';
import 'vue-awesome/icons/list-ol';
import 'vue-awesome/icons/check-square';
import 'vue-awesome/icons/indent';
import 'vue-awesome/icons/outdent';
import 'vue-awesome/icons/minus';
import 'vue-awesome/icons/table';
import 'vue-awesome/icons/undo';
import 'vue-awesome/icons/redo';

import { noop } from '../../utils/shared';

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
