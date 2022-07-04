import type { Editor, Extension } from '@tiptap/core';
import TiptapTextAlign from '@tiptap/extension-text-align';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const TextAlign = TiptapTextAlign.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ['heading', 'paragraph', 'list_item', 'title'],
      button({
        editor,
        extension,
        t,
      }: {
        editor: Editor;
        extension: Extension;
        t: (...args: any[]) => string;
      }) {
        return extension.options.alignments.reduce((acc, alignment) => {
          return acc.concat({
            component: CommandButton,
            componentProps: {
              command: () => {
                if (editor.isActive({ textAlign: alignment })) {
                  editor.commands.unsetTextAlign();
                } else {
                  editor.commands.setTextAlign(alignment);
                }
              },
              isActive:
                alignment === 'left'
                  ? false
                  : editor.isActive({ textAlign: alignment }),
              icon: `align-${alignment}`,
              tooltip: t(
                `editor.extensions.TextAlign.buttons.align_${alignment}.tooltip`
              ),
            },
          });
        }, []);
      },
    };
  },
});

export default TextAlign;
