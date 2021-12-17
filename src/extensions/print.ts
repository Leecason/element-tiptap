import { Extension, MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { MenuBtnView } from '@/../types';
import { printEditorContent } from '@/utils/print';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class Print extends Extension implements MenuBtnView {
  get name() {
    return 'print';
  }

  commands() {
    return (): CommandFunction => (_state, _dispatch, view) => {
      return printEditorContent(view);
    };
  }

  keys() {
    return {
      // @ts-ignore
      'Mod-p': (_state, _dispatch, view) => {
        return printEditorContent(view);
      },
    };
  }

  menuBtnView({ commands, t }: MenuData) {
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
