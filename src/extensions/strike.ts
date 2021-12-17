import { Strike as TiptapStrike } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class Strike extends TiptapStrike implements MenuBtnView {
  menuBtnView({ isActive, commands, t }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.strike,
        isActive: isActive.strike(),
        icon: 'strikethrough',
        tooltip: t('editor.extensions.Strike.tooltip'),
      },
    };
  }
}
