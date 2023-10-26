import { getMarkRange } from '@tiptap/core';
import type { Editor } from '@tiptap/core';
import TiptapLink from '@tiptap/extension-link';
import { Plugin, TextSelection } from '@tiptap/pm/state';
import { EditorView } from '@tiptap/pm/view';
import AddLinkCommandButton from '@/components/MenuCommands/Link/AddLinkCommandButton.vue';

const Link = TiptapLink.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor }: { editor: Editor }) {
        return {
          component: AddLinkCommandButton,
          componentProps: {
            editor,
          },
        };
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handleClick(view: EditorView, pos: number) {
            const { schema, doc, tr } = view.state;

            const range = getMarkRange(doc.resolve(pos), schema.marks.link);

            if (!range) return false;

            const $start = doc.resolve(range.from);
            const $end = doc.resolve(range.to);

            const transaction = tr.setSelection(
              new TextSelection($start, $end)
            );

            view.dispatch(transaction);
            return true;
          },
        },
      }),
    ];
  },
});

export default Link;
