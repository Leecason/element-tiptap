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

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from '../../types';
import CommandButton from './CommandButton.vue';
import { isLineHeightActive } from '../../utils/line_height';
import i18nMixin from '../../mixins/i18nMixin';

@Component({
  components: {
    CommandButton,
  },
})
export default class LineHeightDropdown extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  private get editor () {
    return this.editorContext.editor;
  }

  private get lineHeights () {
    return this.editor.extensions.options.line_height.lineHeights;
  }

  private isLineHeightActive (lineHeight: string): boolean {
    return isLineHeightActive(this.editor.state, lineHeight);
  }
};
</script>
