import type { Editor } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import FullscreenCommandButton from '@/components/MenuCommands/FullscreenCommandButton.vue';

const Fullscreen = Extension.create({
  name: 'fullscreen',

  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor }: { editor: Editor }) {
        return {
          component: FullscreenCommandButton,
        };
      },
    };
  },
});

export default Fullscreen;
