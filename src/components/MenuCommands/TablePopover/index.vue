<template>
  <el-popover
    v-model="popoverVisible"
    placement="bottom"
    trigger="click"
    popper-class="el-tiptap-popper"
  >
    <div class="el-tiptap-popper__menu">
      <div class="el-tiptap-popper__menu__item">
        <create-table-popover
          @createTable="createTable"
        />
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.addColumnBefore"
      >
        <span>{{ t('editor.extensions.Table.buttons.add_column_before') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.addColumnAfter"
      >
        <span>{{ t('editor.extensions.Table.buttons.add_column_after') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.deleteColumn"
      >
        <span>{{ t('editor.extensions.Table.buttons.delete_column') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.addRowBefore"
      >
        <span>{{ t('editor.extensions.Table.buttons.add_row_before') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.addRowAfter"
      >
        <span>{{ t('editor.extensions.Table.buttons.add_row_after') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.deleteRow"
      >
        <span>{{ t('editor.extensions.Table.buttons.delete_row') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !enableMergeCells }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.mergeCells"
      >
        <span>{{ t('editor.extensions.Table.buttons.merge_cells') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !enableSplitCell }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.splitCell"
      >
        <span>{{ t('editor.extensions.Table.buttons.split_cell') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.deleteTable"
      >
        <span>{{ t('editor.extensions.Table.buttons.delete_table') }}</span>
      </div>
    </div>

    <command-button
      slot="reference"
      :is-active="isTableActive"
      :tooltip="t('editor.extensions.Table.tooltip')"
      icon="table"
    />
  </el-popover>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import { Popover } from 'element-ui';
import { isTableActive, enableMergeCells, enableSplitCell } from '@/utils/table';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';
import CreateTablePopover from './CreateTablePopover.vue';

@Component({
  components: {
    [Popover.name]: Popover,
    CommandButton,
    CreateTablePopover,
  },
})
export default class TablePopover extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  private popoverVisible: boolean = false;

  private get editor () {
    return this.editorContext.editor;
  }

  private get isTableActive () {
    return isTableActive(this.editor.state);
  }

  private get enableMergeCells () {
    return enableMergeCells(this.editor.state);
  }

  private get enableSplitCell () {
    return enableSplitCell(this.editor.state);
  }

  hidePopover (): void {
    this.popoverVisible = false;
  }

  createTable ({ row, col }: { row: number, col: number }): void {
    this.editorContext.commands.createTable({
      rowsCount: row,
      colsCount: col,
      withHeaderRow: true,
    });

    this.hidePopover();
  }
};
</script>
