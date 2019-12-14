import { TodoItem as TiptapTodoItem } from 'tiptap-extensions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

library.add(faCheckSquare, faSquare);

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
            <font-awesome-icon :icon="done ? ['fas', 'check-square'] : ['far', 'square']" />
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
