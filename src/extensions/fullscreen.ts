import { Extension } from 'tiptap';
import { MenuBtnView } from '@/../types';
import FullscreenCommandButton from '@/components/MenuCommands/FullscreenCommandButton.vue';

export default class FullScreen extends Extension implements MenuBtnView {
  menuBtnView () {
    return {
      component: FullscreenCommandButton,
    };
  }
}
