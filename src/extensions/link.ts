import { Link as TiptapLink } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '../types';
import LinkCommandButton from '../components/MenuCommands/LinkCommandButton.vue';

export default class Link extends TiptapLink implements MenuBtnView {
  menuBtnView (editorContext: MenuData) {
    return {
      component: LinkCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
