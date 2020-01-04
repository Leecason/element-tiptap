<template>
  <el-popover
    ref="popoverRef"
    placement="bottom"
    trigger="click"
    class="table-popover"
  >
    <div class="table-popover__menu">
      <div class="table-popover__menu__item">
        <create-table-popover
          @createTable="createTable"
        />
      </div>

      <div class="table-popover__menu__item__separator" />

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addColumnBefore"
      >
        <span>Add Column Before</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addColumnAfter"
      >
        <span>Add Column After</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteColumn"
      >
        <span>Delete Column</span>
      </div>

      <div class="table-popover__menu__item__separator" />

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addRowBefore"
      >
        <span>Add Row Before</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addRowAfter"
      >
        <span>Add Row After</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteRow"
      >
        <span>Delete Row</span>
      </div>

      <div class="table-popover__menu__item__separator" />

      <div
        :class="{ 'table-popover__menu__item--disabled': !enableMergeCells }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.mergeCells"
      >
        <span>Merge Cells</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !enableSplitCell }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.splitCell"
      >
        <span>Split Cell</span>
      </div>

      <div class="table-popover__menu__item__separator" />

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteTable"
      >
        <span>Delete Table</span>
      </div>
    </div>

    <command-button
      slot="reference"
      :is-active="isTableActive"
      tooltip="Table"
      icon="table"
    />
  </el-popover>
</template>

<script>
import { isTableActive, enableMergeCells, enableSplitCell } from '@/utils/table';
import CommandButton from '../CommandButton.vue';
import CreateTablePopover from './CreateTablePopover.vue';

export default {
  name: 'TablePopover',

  components: {
    CommandButton,
    CreateTablePopover,
  },

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

    isTableActive () {
      return isTableActive(this.editor.state);
    },

    enableMergeCells () {
      return enableMergeCells(this.editor.state);
    },

    enableSplitCell () {
      return enableSplitCell(this.editor.state);
    },
  },

  methods: {
    closePopover () {
      this.$refs.popoverRef.doClose();
    },

    createTable (row, col) {
      this.editorContext.commands.createTable({
        rowsCount: row,
        colsCount: col,
        withHeaderRow: true,
      });

      this.closePopover();
    },
  },
};
</script>

<style lang="scss" scoped>
.table-popover__menu {
  &__item {
    cursor: pointer;
    padding: 8px 0;

    &:hover {
      color: #409eff;
    }

    &--disabled {
      cursor: default;
      opacity: .2;

      &:hover {
        color: inherit;
      }
    }

    &__separator {
      border-top: 1px solid #dcdfe6;
      height: 0;
      margin: 5px 0;
      width: 100%;
    }
  }
}
</style>
