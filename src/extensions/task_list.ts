import type { Editor } from '@tiptap/core';
import { default as TiptapTaskList } from '@tiptap/extension-task-list';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const TaskList = TiptapTaskList.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleTaskList();
            },
            isActive: editor.isActive('taskList'),
            icon: 'tasks',
            tooltip: t('editor.extensions.TodoList.tooltip'),
          },
        };
      },
    };
  },
});

export default TaskList;
