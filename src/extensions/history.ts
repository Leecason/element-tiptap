import { History as TiptapHistory } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class History extends TiptapHistory implements MenuBtnView {
  menuBtnView({ commands, t }: MenuData) {
    return [
      {
        component: CommandButton,
        componentProps: {
          command: commands.undo,
          icon: 'undo',
          tooltip: t('editor.extensions.History.tooltip.undo'),
        },
      },
      {
        component: CommandButton,
        componentProps: {
          command: commands.redo,
          icon: 'redo',
          tooltip: t('editor.extensions.History.tooltip.redo'),
        },
      },
    ];
  }
}
