import { Italic as TiptapItalic } from 'tiptap-extensions';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class Bold extends TiptapItalic {
  menuBtnView ({ isActive, commands }) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.italic,
        isActive: isActive.italic(),
        icon: 'italic',
        tooltip: 'Italic',
      },
    };
  }
}
