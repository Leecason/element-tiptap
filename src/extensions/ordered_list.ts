import type { Editor } from '@tiptap/core';
import { default as TiptapOrderedList } from '@tiptap/extension-ordered-list';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const OrderedList = TiptapOrderedList.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleOrderedList();
            },
            isActive: editor.isActive('orderedList'),
            icon: 'list-ol',
            tooltip: t('editor.extensions.OrderedList.tooltip'),
          },
        };
      },
    };
  },
});

export default OrderedList;
