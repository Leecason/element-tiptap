<template>
  <el-dropdown
    placement="bottom"
    trigger="hover"
    @command="i => editorContext.commands.heading({ level: i })"
  >
    <command-button
      :is-active="isHeadingActive"
      tooltip="Heading"
      icon="heading"
    />
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="i in level"
        :key="i"
        :command="i"
        :class="{
          'el-dropdown-menu__item--active': editorContext.isActive.heading({ level: i }),
        }"
      >
        <component :is="'h' +i">
          Heading {{ i }}
        </component>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { findParentNodeOfType } from 'prosemirror-utils';

import CommandButton from './CommandButton.vue';

export default {
  name: 'HeadingDropdown',

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
    level () {
      return this.editor.extensions.options.heading.level;
    },

    isHeadingActive () {
      const result = this.findHeading();
      return !!result;
    },
  },

  methods: {
    findHeading () {
      const { state } = this.editor;
      const { heading } = state.schema.nodes;
      return findParentNodeOfType(heading)(state.selection);
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
