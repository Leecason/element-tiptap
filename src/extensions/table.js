import { Table as TiptapTable } from 'tiptap-extensions';
import TablePopover from '../components/MenuCommands/TablePopover/index.vue';

export default class Table extends TiptapTable {
  menuBtnView ({ isActive, commands }) {
    return {
      component: TablePopover,
      componentProps: {
        command: commands.italic,
        isActive: isActive.italic(),
        icon: 'italic',
        tooltip: 'Italic',
      },
    };
  }
}
