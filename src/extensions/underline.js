import { Underline as TiptapUnderline } from 'tiptap-extensions';
import CommandButton from '../components/MenuCommands/CommandButton.vue';

export default class Underline extends TiptapUnderline {
  menuBtnView ({ isActive, commands }) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.underline,
        isActive: isActive.underline(),
        icon: 'underline',
        tooltip: 'Underline',
      },
    };
  }
}
