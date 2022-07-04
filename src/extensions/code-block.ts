import type { Editor } from '@tiptap/core';
import TiptapCodeBlock from '@tiptap/extension-code-block';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const CodeBlock = TiptapCodeBlock.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleCodeBlock();
            },
            isActive: editor.isActive('codeBlock'),
            icon: 'code',
            tooltip: t('editor.extensions.CodeBlock.tooltip'),
          },
        };
      },
    };
  },
});

export default CodeBlock;
