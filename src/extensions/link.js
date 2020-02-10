import { Link as TiptapLink } from 'tiptap-extensions';
import LinkCommandButton from '../components/MenuCommands/LinkCommandButton.vue';

export default class Link extends TiptapLink {
  menuBtnView (editorContext) {
    return {
      component: LinkCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
