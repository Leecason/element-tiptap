import { Table as TiptapTable } from 'tiptap-extensions';
import TablePopover from '../components/MenuCommands/TablePopover/index.vue';

export default class Table extends TiptapTable {
  menuBtnView (editorContext) {
    return {
      component: TablePopover,
      componentProps: {
        editorContext,
      },
    };
  }
}
