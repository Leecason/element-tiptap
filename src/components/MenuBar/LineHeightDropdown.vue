<template>
  <el-dropdown
    placement="bottom"
    trigger="hover"
    @command="lineHeight => editorContext.commands.line_height({ lineHeight })"
  >
    <command-button
      tooltip="Line height"
      icon="text-height"
    />
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="lineHeight in lineHeights"
        :key="lineHeight"
        :command="lineHeight"
        :class="{
          'el-dropdown-menu__item--active': isLineHeightActive(lineHeight),
        }"
      >
        <span>{{ lineHeight }}</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { isLineHeightActive } from '@/extensions/line_height';

import CommandButton from './CommandButton.vue';

export default {
  name: 'LineHeightDropdown',

  components: {
    CommandButton,
  },

  inject: ['editor'],

  props: {
    editorContext: {
      type: Object,
      required: true,
    },
  },

  computed: {
    lineHeights () {
      return this.editor.extensions.options.line_height.lineHeights;
    },
  },

  methods: {
    isLineHeightActive (lineHeight) {
      return isLineHeightActive(this.editor.state, lineHeight);
    },
  },
};
</script>

<style lang="scss">
.el-dropdown-menu__item {
  line-height: 1.5;
  padding-top: 5px;
  padding-bottom: 5px;

  &--active {
    background-color: #ecf5ff;
    color: #409EFF;
  }
}
</style>
