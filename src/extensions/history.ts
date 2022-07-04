import type { Editor } from '@tiptap/core';
import TiptapHistory from '@tiptap/extension-history';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const History = TiptapHistory.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return [
          {
            component: CommandButton,
            componentProps: {
              command: () => {
                editor.commands.undo();
              },

              icon: 'undo',
              tooltip: t('editor.extensions.History.tooltip.undo'),
            },
          },
          {
            component: CommandButton,
            componentProps: {
              command: () => {
                editor.commands.redo();
              },

              icon: 'redo',
              tooltip: t('editor.extensions.History.tooltip.redo'),
            },
          },
        ];
      },
    };
  },
});

export default History;
