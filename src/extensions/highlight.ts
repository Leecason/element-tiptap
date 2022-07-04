import { Editor } from '@tiptap/core';
import TiptapHighlight from '@tiptap/extension-highlight';
import { COLOR_SET } from '@/utils/color';
import HighlightPopover from '../components/MenuCommands/HighlightPopover.vue';

const Highlight = TiptapHighlight.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: true,
      colors: COLOR_SET,
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: HighlightPopover,
          componentProps: {
            editor,
          },
        };
      },
    };
  },
});

export default Highlight;
