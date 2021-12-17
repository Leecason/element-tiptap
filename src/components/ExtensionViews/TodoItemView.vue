<template>
  <li
    :data-type="node.type.name"
    :data-done="done.toString()"
    :data-text-align="node.attrs.textAlign"
    :class="{ 'todo-item--done': done }"
    :style="todoItemStyle"
    class="todo-item"
    data-drag-handle
  >
    <span contenteditable="false">
      <el-checkbox v-model="done" />
    </span>

    <div
      ref="content"
      :contenteditable="view.editable.toString()"
      class="todo-content"
    />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Checkbox } from 'element-ui';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { transformLineHeightToCSS } from '@/utils/line_height';

@Component({
  components: {
    [Checkbox.name]: Checkbox,
  },
})
export default class TodoItemView extends Vue {
  @Prop({
    type: ProsemirrorNode,
    required: true,
  })
  readonly node!: ProsemirrorNode;

  @Prop({
    type: Object,
    required: true,
  })
  readonly view!: EditorView;

  @Prop({
    type: Function,
    required: true,
  })
  readonly updateAttrs!: Function;

  get done(): boolean {
    return this.node.attrs.done;
  }

  set done(done) {
    this.updateAttrs({
      done,
    });
  }

  private get todoItemStyle() {
    return {
      lineHeight: transformLineHeightToCSS(this.node.attrs.lineHeight),
    };
  }
};
</script>
