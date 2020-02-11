import { Underline as TiptapUnderline } from 'tiptap-extensions';
import { MenuData, MenuBtnComponentOptions } from '../types';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';

export default class Underline extends TiptapUnderline {
  menuBtnView ({ isActive, commands }: MenuData): MenuBtnComponentOptions {
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
