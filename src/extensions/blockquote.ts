import type { Editor } from '@tiptap/core';
import TiptapBlockquote from '@tiptap/extension-blockquote';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Blockquote = TiptapBlockquote.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleBlockquote();
            },
            isActive: editor.isActive('blockquote'),
            icon: 'quote-right',
            tooltip: t('editor.extensions.Blockquote.tooltip'),
          },
        };
      },
    };
  },
});

export default Blockquote;
