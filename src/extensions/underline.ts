import { Underline as TiptapUnderline } from 'tiptap-extensions';
import { MenuData, MenuBtnView } from '../types';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';

export default class Underline extends TiptapUnderline {
  menuBtnView ({ isActive, commands }: MenuData): MenuBtnView {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.underline,
        isActive: isActive.underline(),
        icon: 'underline',
        tooltip: t('editor.extensions.Underline.tooltip'),
      },
    };
  }
}
