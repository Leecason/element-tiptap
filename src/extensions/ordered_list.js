import { OrderedList as TiptapOrderedList } from 'tiptap-extensions';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';
export default class OrderedList extends TiptapOrderedList {
  menuBtnView ({ isActive, commands }) {
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
