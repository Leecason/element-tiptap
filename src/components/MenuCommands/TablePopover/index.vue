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
        <span>{{ i18n('table.addColumnBefore') }}</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addColumnAfter"
      >
        <span>{{ i18n('table.addColumnAfter') }}</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteColumn"
      >
        <span>{{ i18n('table.deleteColumn') }}</span>
      </div>

      <div class="table-popover__menu__item__separator" />

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addRowBefore"
      >
        <span>{{ i18n('table.addRowBefore') }}</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addRowAfter"
      >
        <span>{{ i18n('table.addRowAfter') }}</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteRow"
      >
        <span>{{ i18n('table.deleteRow') }}</span>
      </div>

      <div class="table-popover__menu__item__separator" />

      <div
        :class="{ 'table-popover__menu__item--disabled': !enableMergeCells }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.mergeCells"
      >
        <span>{{ i18n('table.mergeCells') }}</span>
      </div>

      <div
        :class="{ 'table-popover__menu__item--disabled': !enableSplitCell }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.splitCell"
      >
        <span>{{ i18n('table.splitCell') }}</span>
      </div>

      <div class="table-popover__menu__item__separator" />

      <div
        :class="{ 'table-popover__menu__item--disabled': !isTableActive }"
        class="table-popover__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteTable"
      >
        <span>{{ i18n('table.deleteTable') }}</span>
      </div>
    </div>

    <command-button
      slot="reference"
      :is-active="isTableActive"
      tooltip="table"
      icon="table"
    />
  </el-popover>
</template>

<script>
import { isTableActive, enableMergeCells, enableSplitCell } from '../../../utils/table';
import CommandButton from '../CommandButton.vue';
import CreateTablePopover from './CreateTablePopover.vue';
import i18nMixin from '../../../mixins/i18nMixin';

export default {
  name: 'TablePopover',

  mixins: [i18nMixin],

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
