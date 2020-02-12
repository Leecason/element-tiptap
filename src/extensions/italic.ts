import { Italic as TiptapItalic } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '../types';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';

export default class Italic extends TiptapItalic implements MenuBtnView {
  menuBtnView ({ isActive, commands }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.italic,
        isActive: isActive.italic(),
        icon: 'italic',
        tooltip: t('editor.extensions.Italic.tooltip'),
      },
    };
  }
}
