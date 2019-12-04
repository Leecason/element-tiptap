import { TodoItem as TiptapTodoItem } from 'tiptap-extensions';

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
            <i :class="done ? 'fa fa-check-square' : 'far fa-square'" />
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
