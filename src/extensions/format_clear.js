import { Extension } from 'tiptap';
import { setTextAlign } from '../utils/text_align';
import { setTextLineHeight } from '../utils/line_height';
import CommandButton from '../components/MenuCommands/CommandButton.vue';

const FORMAT_MARK_NAMES = [
  'bold',
  'italic',
  'underline',
  'strike',
  'link',
  'text_color',
  'text_highlight',
];

export default class FormatClear extends Extension {
  get name () {
    return 'format_clear';
  }

  commands () {
    return () => (state, dispatch) => {
      let tr = this.clearMarks(state.tr.setSelection(state.selection), state.schema);

      if (dispatch && tr.docChanged) {
        dispatch(tr);
        return true;
      }
      return false;
    };
  }

  clearMarks (tr, schema) {
    const { doc, selection } = tr;
    if (!selection || !doc) return tr;

    const { from, to, empty } = selection;
    if (empty) return tr;

    const markTypesToRemove = new Set(
      FORMAT_MARK_NAMES.map(n => schema.marks[n]).filter(Boolean)
    );

    if (!markTypesToRemove.size) return tr;

    const jobs = [];
    doc.nodesBetween(from, to, (node, pos) => {
      if (node.marks && node.marks.length) {
        node.marks.some(mark => {
          if (markTypesToRemove.has(mark.type)) {
            jobs.push({ node, pos, mark });
          }
        });
        return true;
      }
      return true;
    });

    jobs.forEach(job => {
      const { node, mark, pos } = job;
      tr = tr.removeMark(pos, pos + node.nodeSize, mark.type);
    });

    tr = setTextAlign(tr, null);
    tr = setTextLineHeight(tr, null);

    return tr;
  }

  menuBtnView ({ commands }) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.format_clear,
        icon: 'remove-format',
        tooltip: 'formatClear',
      },
    };
  }
}
