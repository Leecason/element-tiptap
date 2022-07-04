import type { Editor } from '@tiptap/core';
import TiptapStrike from '@tiptap/extension-strike';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Strike = TiptapStrike.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleStrike();
            },
            isActive: editor.isActive('strike'),
            icon: 'strikethrough',
            tooltip: t('editor.extensions.Strike.tooltip'),
          },
        };
      },
    };
  },
});

export default Strike;
