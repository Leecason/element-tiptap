import { Extension, MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { MenuBtnView } from '@/../types';
import { t } from '@/i18n/index';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import printHtml from '../utils/print';

export default class Print extends Extension implements MenuBtnView {
  get name () {
    return 'print';
  }

  commands () {
    return (): CommandFunction => (_state, _dispatch, view) => {
      const editorContent = view.dom.closest('.el-tiptap-editor__content');
      if (editorContent) {
        printHtml(editorContent);
        return true;
      }
      return false;
    };
  }

  menuBtnView ({ commands }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.print,
        icon: 'print',
        tooltip: t('editor.extensions.Print.tooltip'),
      },
    };
  }
}
