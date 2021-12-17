// @ts-nocheck
import { TodoList as TiptapTodoList } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class TodoList extends TiptapTodoList implements MenuBtnView {
  get schema() {
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
      toDOM: () => {
        const attrs: { [key: string]: any } = {};

        attrs['data-type'] = this.name;

        return ['ul', attrs, 0];
      },
    };
  }

  menuBtnView({ isActive, commands, t }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        isActive: isActive.todo_list(),
        command: commands.todo_list,
        icon: 'tasks',
        tooltip: t('editor.extensions.TodoList.tooltip'),
      },
    };
  }
}
