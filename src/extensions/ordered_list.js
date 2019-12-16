import { OrderedList as TiptapOrderedList } from 'tiptap-extensions';
import CommandButton from '../components/MenuCommands/CommandButton.vue';

export default class OrderedList extends TiptapOrderedList {
  menuBtnView ({ isActive, commands }) {
    return {
      component: CommandButton,
      componentProps: {
        isActive: isActive.ordered_list(),
        command: commands.ordered_list,
        icon: 'list-ol',
        tooltip: 'Ordered list',
      },
    };
  }
}
