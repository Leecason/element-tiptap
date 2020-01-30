<template>
  <el-dropdown
    placement="bottom"
    trigger="hover"
    @command="i => i > 0
      ? editorContext.commands.heading({ level: i })
      : editorContext.commands.paragraph()
    "
  >
    <command-button
      :is-active="isHeadingActive()"
      :tooltip="$i18n('editor.extensions.Heading.tooltip')"
      icon="heading"
    />
    <el-dropdown-menu
      slot="dropdown"
      class="el-tiptap-dropdown-menu"
    >
      <el-dropdown-item
        :command="0"
        :class="{
          'el-tiptap-dropdown-menu__item--active': editorContext.isActive.paragraph(),
        }"
        class="el-tiptap-dropdown-menu__item"
      >
        <span>{{ $i18n('editor.extensions.Heading.buttons.paragraph') }}</span>
      </el-dropdown-item>
      <el-dropdown-item
        v-for="i in level"
        :key="i"
        :command="i"
        :class="{
          'el-tiptap-dropdown-menu__item--active': isHeadingActive(i),
        }"
        class="el-tiptap-dropdown-menu__item"
      >
        <component :is="'h' +i">
          {{ $i18n('editor.extensions.Heading.buttons.heading') }} {{ i }}
        </component>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { isHeadingActive } from '../../utils/heading';
import CommandButton from './CommandButton.vue';
import i18nMixin from '../../mixins/i18nMixin';

export default {
  name: 'HeadingDropdown',

  components: {
    CommandButton,
  },

  mixins: [i18nMixin],

  props: {
    editorContext: {
      type: Object,
      required: true,
    },
  },

  computed: {
    editor () {
      return this.editorContext.editor;
    },

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
