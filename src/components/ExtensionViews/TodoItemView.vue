<template>
  <node-view-wrapper class="task-item-wrapper">
    <li
      :data-type="node?.type.name"
      :data-done="done.toString()"
      data-drag-handle
    >
      <span contenteditable="false">
        <el-checkbox v-model="done" />
      </span>

      <node-view-content class="todo-content" />
    </li>
  </node-view-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NodeViewWrapper, nodeViewProps, NodeViewContent } from '@tiptap/vue-3';
import { ElCheckbox } from 'element-plus';

export default defineComponent({
  name: 'TaskItemView',

  components: {
    NodeViewWrapper,
    NodeViewContent,
    ElCheckbox,
  },

  props: nodeViewProps,

  computed: {
    done: {
      get(): boolean {
        return this.node?.attrs.done;
      },
      set(done: boolean) {
        this.updateAttributes?.({
          done,
        });
      },
    },
  },
});
</script>
