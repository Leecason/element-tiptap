import type { Editor } from '@tiptap/core';
import { Table as TiptapTable } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import TablePopover from '@/components/MenuCommands/TablePopover/index.vue';

const Table = TiptapTable.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: TablePopover,
          componentProps: {
            editor,
          },
        };
      },
    };
  },

  addExtensions() {
    return [TableRow, TableHeader, TableCell];
  },
});

export default Table;
