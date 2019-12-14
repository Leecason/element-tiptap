import { Bold as TiptapBold } from 'tiptap-extensions';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class Bold extends TiptapBold {
  menuBtnView ({ isActive, commands }) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.bold,
        isActive: isActive.bold(),
        icon: 'bold',
        tooltip: 'Bold',
      },
    };
  }
}
