import { Extension } from '@tiptap/core';
import type { Editor } from '@tiptap/core';
import { printEditorContent } from '@/utils/print';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    print: {
      /**
       * print the editor content
       */
      print: () => ReturnType;
    };
  }
}

const Print = Extension.create({
  name: 'print',

  addOptions() {
    return {
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.print();
            },
            icon: 'print',
            tooltip: t('editor.extensions.Print.tooltip'),
          },
        };
      },
    };
  },

  addCommands() {
    return {
      print:
        () =>
        ({ view }) => {
          return printEditorContent(view);
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-p': () => this.editor.commands.print(),
    };
  },
});

export default Print;
