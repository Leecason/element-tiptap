import type { Editor, Extension } from '@tiptap/core';
import type { HeadingOptions } from '@tiptap/extension-heading';
import TiptapHeading from '@tiptap/extension-heading';
import HeadingDropdown from '@/components/MenuCommands/HeadingDropdown.vue';

const Heading = TiptapHeading.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({
        editor,
        extension,
      }: {
        editor: Editor;
        extension: Extension;
        t: (...args: any[]) => string;
      }) {
        return {
          component: HeadingDropdown,
          componentProps: {
            levels: (extension.options as HeadingOptions).levels,
            editor,
          },
        };
      },
    };
  },
});

export default Heading;
