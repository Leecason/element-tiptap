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
      <i :class="`fa fa-${icon}`" />
    </div>
  </el-tooltip>
</template>

<script>
import { noop } from 'utils/shared';

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
