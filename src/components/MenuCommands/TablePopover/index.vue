<template>
  <el-popover
    ref="popoverRef"
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
        @mousedown="closePopover"
        @click="editorContext.commands.addColumnBefore"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.add_column_before') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addColumnAfter"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.add_column_after') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteColumn"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.delete_column') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addRowBefore"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.add_row_before') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.addRowAfter"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.add_row_after') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteRow"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.delete_row') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !enableMergeCells }"
        class="el-tiptap-popper__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.mergeCells"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.merge_cells') }}</span>
      </div>

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !enableSplitCell }"
        class="el-tiptap-popper__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.splitCell"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.split_cell') }}</span>
      </div>

      <div class="el-tiptap-popper__menu__item__separator" />

      <div
        :class="{ 'el-tiptap-popper__menu__item--disabled': !isTableActive }"
        class="el-tiptap-popper__menu__item"
        @mousedown="closePopover"
        @click="editorContext.commands.deleteTable"
      >
        <span>{{ $i18n('editor.extensions.Table.buttons.delete_table') }}</span>
      </div>
    </div>

    <command-button
      slot="reference"
      :is-active="isTableActive"
      :tooltip="$i18n('editor.extensions.Table.tooltip')"
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

  components: {
    CommandButton,
    CreateTablePopover,
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
