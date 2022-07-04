import type { Editor } from '@tiptap/core';
import TiptapBold from '@tiptap/extension-bold';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Bold = TiptapBold.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleBold();
            },
            isActive: editor.isActive('bold'),
            icon: 'bold',
            tooltip: t('editor.extensions.Bold.tooltip'),
          },
        };
      },
    };
  },
});

export default Bold;
