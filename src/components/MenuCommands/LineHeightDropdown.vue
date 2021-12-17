<template>
  <el-dropdown
    placement="bottom"
    trigger="click"
    @command="lineHeight => editorContext.commands.line_height({ lineHeight })"
  >
    <command-button
      :enable-tooltip="et.tooltip"
      :tooltip="et.t('editor.extensions.LineHeight.tooltip')"
      :readonly="et.isCodeViewMode"
      icon="text-height"
    />
    <el-dropdown-menu
      slot="dropdown"
      class="el-tiptap-dropdown-menu"
    >
      <el-dropdown-item
        v-for="lineHeight in lineHeights"
        :key="lineHeight"
        :command="lineHeight"
        :class="{
          'el-tiptap-dropdown-menu__item--active': isLineHeightActive(lineHeight),
        }"
        class="el-tiptap-dropdown-menu__item"
      >
        <span>{{ lineHeight }}</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
import { isLineHeightActive } from '@/utils/line_height';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    CommandButton,
  },
})
export default class LineHeightDropdown extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Inject() readonly et!: any;

  private get editor() {
    return this.editorContext.editor;
  }

  private get lineHeights() {
    return this.editor.extensions.options.line_height.lineHeights;
  }

  private isLineHeightActive(lineHeight: string): boolean {
    return isLineHeightActive(this.editor.state, lineHeight);
  }
};
</script>
