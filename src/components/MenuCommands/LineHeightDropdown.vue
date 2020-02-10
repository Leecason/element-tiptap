<template>
  <el-dropdown
    placement="bottom"
    trigger="hover"
    @command="lineHeight => editorContext.commands.line_height({ lineHeight })"
  >
    <command-button
      :tooltip="t('editor.extensions.LineHeight.tooltip')"
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
import { isLineHeightActive } from '../../utils/line_height.ts';
import CommandButton from './CommandButton.vue';
import i18nMixin from '../../mixins/i18nMixin.ts';

export default {
  name: 'LineHeightDropdown',

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
