import type { Editor } from '@tiptap/core';
import { default as TiptapUnderline } from '@tiptap/extension-underline';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Underline = TiptapUnderline.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleUnderline();
            },
            isActive: editor.isActive('underline'),
            icon: 'underline',
            tooltip: t('editor.extensions.Underline.tooltip'),
          },
        };
      },
    };
  },
});

export default Underline;
