import { History as TiptapHistory } from 'tiptap-extensions';
import CommandButton from '../components/MenuCommands/CommandButton.vue';

export default class History extends TiptapHistory {
  menuBtnView ({ commands }) {
    return [
      {
        component: CommandButton,
        componentProps: {
          command: commands.undo,
          icon: 'undo',
          tooltip: 'Undo',
        },
      },
      {
        component: CommandButton,
        componentProps: {
          command: commands.redo,
          icon: 'redo',
          tooltip: 'Redo',
        },
      },
    ];
  }
}
