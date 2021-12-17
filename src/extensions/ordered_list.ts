import { OrderedList as TiptapOrderedList } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class OrderedList extends TiptapOrderedList implements MenuBtnView {
  menuBtnView({ isActive, commands, t }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        isActive: isActive.ordered_list(),
        command: commands.ordered_list,
        icon: 'list-ol',
        tooltip: t('editor.extensions.OrderedList.tooltip'),
      },
    };
  }
}
