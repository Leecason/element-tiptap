import type { Editor } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const SelectAll = Extension.create({
  name: 'selectAll',

  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.selectAll();
            },
            icon: 'select-all',
            tooltip: t('editor.extensions.SelectAll.tooltip'),
          },
        };
      },
    };
  },
});

export default SelectAll;
