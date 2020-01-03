import { Extension } from 'tiptap';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { isTextAlignActive } from '../utils/text_align';

const ALLOWED_NODE_TYPES = [
  'paragraph',
  'heading',
  'list_item',
];

export const ALIGN_PATTERN = /(left|right|center|justify)/;

export default class TextAlign extends Extension {
  get name () {
    return 'text_align';
  }

  get defaultOptions () {
    return {
      alignments: [
        'left',
        'center',
        'right',
        'justify',
      ],
    };
  }

  commands () {
    return this.options.alignments.reduce((commands, alignment) => {
      if (!ALIGN_PATTERN.test(alignment)) return commands;

      return {
        ...commands,
        [`align_${alignment}`]: () => this.setTextAlign({
          alignment: alignment === 'left' ? null : alignment,
        }),
      };
    }, {});
  }

  setTextAlign ({ alignment }) {
    return (state, dispatch) => {
      let { tr } = state;
      const { selection, doc } = tr;

      if (!selection || !doc) {
        return tr;
      }

      const { from, to } = selection;

      const jobs = [];
      alignment = alignment || null;

      doc.nodesBetween(from, to, (node, pos) => {
        const nodeType = node.type;
        const align = node.attrs.textAlign || null;
        if (align !== alignment && ALLOWED_NODE_TYPES.includes(nodeType.name)) {
          jobs.push({
            node,
            pos,
            nodeType,
          });
        }
        return true;
      });

      if (!jobs.length) return tr;

      jobs.forEach(job => {
        const { node, pos, nodeType } = job;
        let { attrs } = node;
        if (alignment) {
          attrs = {
            ...attrs,
            textAlign: alignment,
          };
        } else {
          attrs = {
            ...attrs,
            textAlign: null,
          };
        }
        tr = tr.setNodeMarkup(pos, nodeType, attrs, node.marks);
      });

      if (tr.docChanged) {
        dispatch && dispatch(tr);
        return true;
      }

      return false;
    };
  }

  menuBtnView ({ commands, editor }) {
    return this.options.alignments.reduce((views, alignment) => {
      if (!ALIGN_PATTERN.test(alignment)) return views;

      const isActive = alignment === 'left'
        ? false
        : isTextAlignActive(editor.state, alignment);

      return views.concat({
        component: CommandButton,
        componentProps: {
          isActive,
          command: commands[`align_${alignment}`],
          icon: `align-${alignment}`,
          tooltip: `Align ${alignment}`,
        },
      });
    }, []);
  }
}
