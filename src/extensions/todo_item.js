import 'vue-awesome/icons/check-square';
import 'vue-awesome/icons/regular/square';
import { TodoItem as TiptapTodoItem } from 'tiptap-extensions';
import { ALIGN_PATTERN } from './text_align';
import { LINE_HEIGHT_100, transformLineHeightToCSS } from '../utils/line_height.ts';

function getAttrs (dom) {
  let {
    textAlign,
    lineHeight,
  } = dom.style;

  let align = dom.getAttribute('data-text-align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : null;

  lineHeight = (lineHeight && lineHeight !== transformLineHeightToCSS(LINE_HEIGHT_100)) ? lineHeight : null;

  return {
    textAlign: align,
    lineHeight,
    done: dom.getAttribute('data-done') === 'true',
  };
}

function toDOM (node) {
  const {
    done,
    textAlign,
    lineHeight,
  } = node.attrs;

  let style = '';
  const attrs = {};

  attrs['data-type'] = 'todo_item';
  attrs['data-done'] = done.toString();

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  if (lineHeight) {
    const cssLineHeight = transformLineHeightToCSS(lineHeight);
    style += `line-height: ${cssLineHeight};`;
  }

  style && (attrs.style = style);

  return [
    'li',
    attrs,
    ['span', { class: 'todo-checkbox', contenteditable: 'false' }],
    ['div', { class: 'todo-content' }, 0],
  ];
}

export default class TodoItem extends TiptapTodoItem {
  get schema () {
    return {
      attrs: {
        done: { default: false },
        textAlign: { default: null },
        lineHeight: { default: null },
      },
      draggable: true,
      content: this.options.nested ? '(paragraph|todo_list)+' : 'paragraph+',
      parseDOM: [{
        priority: 51,
        tag: `[data-type="${this.name}"]`,
        getAttrs,
      }],
      toDOM,
    };
  }

  get view () {
    return {
      template: `
        <li
          :data-type="node.type.name"
          :data-done="done.toString()"
          :data-text-align="node.attrs.textAlign"
          :class="{ 'todo-item--done': done }"
          :style="todoItemStyle"
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

        todoItemStyle () {
          return {
            lineHeight: transformLineHeightToCSS(this.node.attrs.lineHeight),
          };
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
