import { TodoItem as TiptapTodoItem } from 'tiptap-extensions';
import 'vue-awesome/icons/check-square';
import 'vue-awesome/icons/regular/square';

export default class TodoItem extends TiptapTodoItem {
  get view () {
    return {
      template: `
        <li
          :data-type="node.type.name"
          :data-done="done.toString()"
          :class="{ 'todo-item--done': done }"
          class="todo-item"
          data-drag-handle
        >
          <span
            contenteditable="false"
            class="todo-checkbox"
            @click.stop="toggle"
          >
            <v-icon :name="done ? 'check-square' : 'regular/square'" />
          </span>

          <div
            ref="content"
            :contenteditable="view.editable.toString()"
            class="todo-content"
          />
        </li>
      `,

      props: ['node', 'updateAttrs', 'view'],

      computed: {
        done: {
          get () {
            return this.node.attrs.done;
          },

          set (done) {
            this.updateAttrs({
              done,
            });
          },
        },
      },

      methods: {
        toggle () {
          this.done = !this.done;
        },
      },
    };
  }
}
