<template>
  <el-popover
    placement="bottom"
    trigger="click"
    class="table-popover"
  >
    <div class="table-popover__menu">
      <el-popover
        placement="right"
        trigger="hover"
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
        >
          <span>Insert Table</span>
        </div>
      </el-popover>
    </div>

    <command-button
      slot="reference"
      tooltip="Table"
      icon="table"
    />
  </el-popover>
</template>

<script>
import CommandButton from '../CommandButton.vue';

const INIT_GRID_SIZE = 5;
const MAX_GRID_SIZE = 10;
const DEFAULT_SELECTED_GRID_SIZE = 2;

export default {
  name: 'TablePopover',

  components: {
    CommandButton,
  },

  data () {
    return {
      tableGridSize: {
        row: INIT_GRID_SIZE,
        col: INIT_GRID_SIZE,
      },
      selectedTableGridSize: {
        row: DEFAULT_SELECTED_GRID_SIZE,
        col: DEFAULT_SELECTED_GRID_SIZE,
      },
    };
  },

  methods: {
    selectTableGridSize (row, col) {
      if (row === this.tableGridSize.row) {
        this.tableGridSize.row = Math.min(row + 1, MAX_GRID_SIZE);
      }

      if (col === this.tableGridSize.col) {
        this.tableGridSize.col = Math.min(col + 1, MAX_GRID_SIZE);
      }

      this.selectedTableGridSize.row = row;
      this.selectedTableGridSize.col = col;
    },

    resetTableGridSize () {
      this.tableGridSize = {
        row: INIT_GRID_SIZE,
        col: INIT_GRID_SIZE,
      };

      this.selectedTableGridSize = {
        row: DEFAULT_SELECTED_GRID_SIZE,
        col: DEFAULT_SELECTED_GRID_SIZE,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.table-grid-size-editor {
  $root: &;

  &__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__cell {
    background-color: #fff;
    padding: 5px;

    &__inner {
      border: 1px solid #DCDFE6;
      border-radius: 2px;
      height: 16px;
      padding: 4px;
      width: 16px;
    }

    &--selected {
      #{$root}__cell__inner {
        background-color: #ecf5ff;
        border-color: #409eff;
      }
    }
  }

  &__footer {
    margin-top: 5px;
    text-align: center;
  }
}
</style>
