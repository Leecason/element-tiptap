import { Link as TiptapLink } from 'tiptap-extensions';
import AddLinkCommandButton from '../components/MenuCommands/AddLinkCommandButton.vue';

export default class Bold extends TiptapLink {
  menuBtnView (editorContext) {
    return {
      component: AddLinkCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
