import { Table as TiptapTable } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import TablePopover from '@/components/MenuCommands/TablePopover/index.vue';

export default class Table extends TiptapTable implements MenuBtnView {
  menuBtnView(editorContext: MenuData) {
    return {
      component: TablePopover,
      componentProps: {
        editorContext,
      },
    };
  }
}
