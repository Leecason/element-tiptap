<template>
  <el-dropdown
    placement="bottom"
    trigger="hover"
    @command="i => editorContext.commands.heading({ level: i })"
  >
    <command-button
      :is-active="isHeadingActive(undefined)"
      tooltip="Heading"
      icon="heading"
    />
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="i in level"
        :key="i"
        :command="i"
        :class="{
          'el-dropdown-menu__item--active': isHeadingActive(i),
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
import { isHeadingActive } from '@/extensions/heading';
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
  },

  methods: {
    isHeadingActive (level) {
      return isHeadingActive(this.editor.state, level);
    },
  },
};
</script>
