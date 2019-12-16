import { Extension } from 'tiptap';
import CommandButton from '../components/MenuCommands/CommandButton.vue';

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

  commands () {
    return {
      align_left: () => this.setTextAlign({ alignment: 'null' }),
      align_center: () => this.setTextAlign({ alignment: 'center' }),
      align_right: () => this.setTextAlign({ alignment: 'right' }),
      align_justify: () => this.setTextAlign({ alignment: 'justify' }),
    };
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
        const align = node.attrs.align || null;
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
    return [
      {
        component: CommandButton,
        componentProps: {
          command: commands.align_left,
          icon: 'align-left',
          tooltip: 'Align left',
        },
      },
      {
        component: CommandButton,
        componentProps: {
          isActive: isTextAlignActive(editor.state, 'center'),
          command: commands.align_center,
          icon: 'align-center',
          tooltip: 'Align center',
        },
      },
      {
        component: CommandButton,
        componentProps: {
          isActive: isTextAlignActive(editor.state, 'right'),
          command: commands.align_right,
          icon: 'align-right',
          tooltip: 'Align right',
        },
      },
      {
        component: CommandButton,
        componentProps: {
          isActive: isTextAlignActive(editor.state, 'justify'),
          command: commands.align_justify,
          icon: 'align-justify',
          tooltip: 'Align justify',
        },
      },
    ];
  }
}

export function isTextAlignActive (state, align) {
  const { selection, doc } = state;
  const { from, to } = selection;

  let keepLooking = true;
  let active = false;

  doc.nodesBetween(from, to, (node, _pos) => {
    if (keepLooking && node.attrs.textAlign === align) {
      keepLooking = false;
      active = true;
    }
    return keepLooking;
  });

  return active;
}
