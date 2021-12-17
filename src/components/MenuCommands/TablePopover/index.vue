<template>
  <el-popover
    v-model="popoverVisible"
    :disabled="et.isCodeViewMode"
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
        <span>{{ et.t('editor.extensions.Table.buttons.add_column_before') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.addColumnAfter"
      >
        <span>{{ et.t('editor.extensions.Table.buttons.add_column_after') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.deleteColumn"
      >
        <span>{{ et.t('editor.extensions.Table.buttons.delete_column') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.addRowBefore"
      >
        <span>{{ et.t('editor.extensions.Table.buttons.add_row_before') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.addRowAfter"
      >
        <span>{{ et.t('editor.extensions.Table.buttons.add_row_after') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.deleteRow"
      >
        <span>{{ et.t('editor.extensions.Table.buttons.delete_row') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !enableMergeCells }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.mergeCells"
      >
        <span>{{ et.t('editor.extensions.Table.buttons.merge_cells') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !enableSplitCell }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.splitCell"
      >
        <span>{{ et.t('editor.extensions.Table.buttons.split_cell') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="hidePopover"
        @click="editorContext.commands.deleteTable"
      >
        <span>{{ et.t('editor.extensions.Table.buttons.delete_table') }}</span>
      </div>
    </div>

    <command-button
      slot="reference"
      :is-active="isTableActive"
      :enable-tooltip="et.tooltip"
      :tooltip="et.t('editor.extensions.Table.tooltip')"
      :readonly="et.isCodeViewMode"
      icon="table"
    />
  </el-popover>
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import { Popover } from 'element-ui';
import { isTableActive, enableMergeCells, enableSplitCell } from '@/utils/table';
import CommandButton from '../CommandButton.vue';
import CreateTablePopover from './CreateTablePopover.vue';

@Component({
  components: {
    [Popover.name]: Popover,
    CommandButton,
    CreateTablePopover,
  },
})
export default class TablePopover extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  private popoverVisible: boolean = false;

  @Inject() readonly et!: any;

  private get editor() {
    return this.editorContext.editor;
  }

  private get isTableActive() {
    return isTableActive(this.editor.state);
  }

  private get enableMergeCells() {
    return enableMergeCells(this.editor.state);
  }

  private get enableSplitCell() {
    return enableSplitCell(this.editor.state);
  }

  hidePopover(): void {
    this.popoverVisible = false;
  }

  createTable({ row, col }: { row: number, col: number }): void {
    this.editorContext.commands.createTable({
      rowsCount: row,
      colsCount: col,
      withHeaderRow: true,
    });

    this.hidePopover();
  }
};
</script>
