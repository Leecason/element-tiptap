import { Node as ProsemirrorNode, DOMOutputSpec } from 'prosemirror-model';
import { TodoItem as TiptapTodoItem } from 'tiptap-extensions';
import { transformLineHeightToCSS } from '@/utils/line_height';
import { ALIGN_PATTERN, LINE_HEIGHT_100 } from '@/constants';
import TodoItemView from '@/components/ExtensionViews/TodoItemView.vue';

function getAttrs(dom: HTMLElement) {
  let {
    textAlign,
    lineHeight,
  } = dom.style;

  let align: string | null = dom.getAttribute('data-text-align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : '';

  lineHeight = (lineHeight && lineHeight !== transformLineHeightToCSS(LINE_HEIGHT_100)) ? lineHeight : '';

  return {
    textAlign: align || null,
    lineHeight: lineHeight || null,
    done: dom.getAttribute('data-done') === 'true',
  };
}

function toDOM(node: ProsemirrorNode): DOMOutputSpec {
  const {
    done,
    textAlign,
    lineHeight,
  } = node.attrs;

  let style = '';
  const attrs: { [key: string]: any } = {};

  attrs['data-type'] = 'todo_item';
  attrs['data-done'] = done.toString();

  if (textAlign && textAlign !== 'left') {
    style += `text-align: ${textAlign}`;
  }

  if (lineHeight) {
    const cssLineHeight = transformLineHeightToCSS(lineHeight);
    style += `line-height: ${cssLineHeight};`;
  }

  style && (attrs.style = style);

  return [
    'li',
    { ...attrs, class: `todo-item ${done ? 'todo-item--done' : ''}` },
    // el-checkbox dom
    ['span', {
      contenteditable: 'false'
    }, ['span', {
      class: `el-checkbox ${done ? 'is-checked' : ''}`,
      style: 'pointer-events: none;',
    }, ['span', { class: `el-checkbox__input ${done ? 'is-checked' : ''}` }, [
      'span', { class: 'el-checkbox__inner' }
    ]]]],
    ['div', { class: 'todo-content' }, 0],
  ];
}

export default class TodoItem extends TiptapTodoItem {
  // @ts-ignore
  get schema() {
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

  get view() {
    return TodoItemView;
  }
}
