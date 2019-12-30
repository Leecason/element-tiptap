<template>
  <el-popover
    placement="bottom"
    trigger="manual"
    class="table-popover"
    v-model="popoverVisible"
  >
    <div class="table-popover__menu">
      <create-table-popover
        @createTable="createTable"
      />
    </div>

    <command-button
      slot="reference"
      tooltip="Table"
      icon="table"
      @click.native="popoverVisible = true"
    />
  </el-popover>
</template>

<script>
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

  data () {
    return {
      popoverVisible: false,
    };
  },

  methods: {
    createTable (row, col) {
      this.editorContext.commands.createTable({
        rowsCount: row,
        colsCount: col,
        withHeaderRow: true,
      });

      this.popoverVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
