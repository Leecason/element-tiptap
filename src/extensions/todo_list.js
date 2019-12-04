import { TodoList as TiptapTodoList } from 'tiptap-extensions';

export default class TodoList extends TiptapTodoList {
  get schema () {
    return {
      group: 'block',
      content: 'todo_item+',
      parseDOM: [
        {
          priority: 51,
          tag: `[data-type="${this.name}"]`,
          getAttrs: () => {
            return {
              'data-type': this.name,
            };
          },
        },
      ],
      toDOM: (node) => {
        const attrs = {};

        attrs['data-type'] = this.name;

        return ['ul', attrs, 0];
      },
    };
  }
}
