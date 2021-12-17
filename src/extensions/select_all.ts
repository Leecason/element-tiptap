import { selectAll } from 'prosemirror-commands';
import { Extension, MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { MenuBtnView } from '@/../types';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class SelectAll extends Extension implements MenuBtnView {
  get name() {
    return 'select_all';
  }

  commands() {
    return (): CommandFunction => selectAll;
  }

  menuBtnView({ commands, t }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.select_all,
        icon: 'regular/object-group',
        tooltip: t('editor.extensions.SelectAll.tooltip'),
      },
    };
  }
}
