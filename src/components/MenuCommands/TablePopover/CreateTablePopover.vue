<template>
  <el-popover
    ref="popoverRef"
    placement="right"
    trigger="hover"
    popper-class="el-tiptap-popper"
    @after-leave="resetTableGridSize"
  >
    <div class="table-grid-size-editor">
      <div
        class="table-grid-size-editor__body"
      >
        <div
          v-for="row in tableGridSize.row"
          :key="'r' + row"
        >
          <div
            v-for="col in tableGridSize.col"
            :key="'c' + col"
            :class="{
              'table-grid-size-editor__cell--selected': col <= selectedTableGridSize.col && row <= selectedTableGridSize.row
            }"
            class="table-grid-size-editor__cell"
            @mouseover="selectTableGridSize(row, col)"
            @mousedown="onMouseDown(row, col)"
          >
            <div class="table-grid-size-editor__cell__inner" />
          </div>
        </div>
      </div>

      <div class="table-grid-size-editor__footer">
        {{ selectedTableGridSize.row }} X {{ selectedTableGridSize.col }}
      </div>
    </div>

    <div
      slot="reference"
      class="table-popover__menu-item"
      @mouseover="popoverVisible = true"
    >
      <span>{{ t('editor.extensions.Table.buttons.insert_table') }}</span>
    </div>
  </el-popover>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { MenuData } from '../../types/element-tiptap';
import i18nMixin from '../../../mixins/i18nMixin';

const INIT_GRID_SIZE = 5;
const MAX_GRID_SIZE = 10;
const DEFAULT_SELECTED_GRID_SIZE = 2;

interface GridSize {
  row: number;
  col: number;
}

@Component
export default class CreateTablePopover extends mixins(i18nMixin) {
  popoverVisible = false;
  tableGridSize: GridSize = {
    row: INIT_GRID_SIZE,
    col: INIT_GRID_SIZE,
  };
  selectedTableGridSize: GridSize = {
    row: DEFAULT_SELECTED_GRID_SIZE,
    col: DEFAULT_SELECTED_GRID_SIZE,
  };

  selectTableGridSize (row, col) {
    if (row === this.tableGridSize.row) {
      this.tableGridSize.row = Math.min(row + 1, MAX_GRID_SIZE);
    }

    if (col === this.tableGridSize.col) {
      this.tableGridSize.col = Math.min(col + 1, MAX_GRID_SIZE);
    }

    this.selectedTableGridSize.row = row;
    this.selectedTableGridSize.col = col;
  }

  @Emit('createTable')
  onMouseDown (row: number, col: number): GridSize {
    this.$refs.popoverRef.doClose();

    return { row, col };
  }

  resetTableGridSize (): void {
    this.tableGridSize = {
      row: INIT_GRID_SIZE,
      col: INIT_GRID_SIZE,
    };

    this.selectedTableGridSize = {
      row: DEFAULT_SELECTED_GRID_SIZE,
      col: DEFAULT_SELECTED_GRID_SIZE,
    };
  }
};
</script>
