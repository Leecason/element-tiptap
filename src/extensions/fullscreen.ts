import { Extension } from 'tiptap';
import { MenuBtnView } from '@/../types';
import FullscreenCommandButton from '@/components/MenuCommands/FullscreenCommandButton.vue';

export default class Fullscreen extends Extension implements MenuBtnView {
  get name() {
    return 'fullscreen';
  }

  menuBtnView() {
    return {
      component: FullscreenCommandButton,
    };
  }
}
