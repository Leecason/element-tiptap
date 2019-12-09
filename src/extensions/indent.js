import { Extension } from 'tiptap';
import { TextSelection, AllSelection } from 'prosemirror-state';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import { clamp } from '../utils/shared';
import { isListNode } from '../utils/list';

export default class Indent extends Extension {
  get name () {
    return 'indent';
  }

  get defaultOptions () {
    return {
      minIndent: 0,
      maxIndent: 7,
    };
  }

  commands () {
    return {
      indent: () => this.createIndentCommand(1),
      outdent: () => this.createIndentCommand(-1),
    };
  }

  keys () {
    return {
      Tab: this.createIndentCommand(1),
      'Shift-Tab': this.createIndentCommand(-1),
    };
  }

  menuBtnView ({ commands }) {
    return [
      {
        component: CommandButton,
        componentProps: {
          command: commands.indent,
          icon: 'indent',
          tooltip: 'Indent',
        },
      },
      {
        component: CommandButton,
        componentProps: {
          command: commands.outdent,
          icon: 'outdent',
          tooltip: 'Outdent',
        },
      },
    ];
  }

  createIndentCommand (delta) {
    return (state, dispatch) => {
      const { selection } = state;
      let { tr } = state;
      tr = tr.setSelection(selection);
      tr = this.updateIndentLevel(tr, delta);

      if (tr.docChanged) {
        dispatch && dispatch(tr);
        return true;
      }

      return false;
    };
  }

  updateIndentLevel (tr, delta) {
    const { doc, selection } = tr;

    if (!doc || !selection) return tr;

    if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
      return tr;
    }

    const { from, to } = selection;

    doc.nodesBetween(from, to, (node, pos) => {
      const nodeType = node.type;

      if (
        nodeType.name === 'paragraph' ||
        nodeType.name === 'heading' ||
        nodeType.name === 'blockquote'
      ) {
        tr = this.setNodeIndentMarkup(tr, pos, delta);
        return false;
      } else if (isListNode(node)) {
        return false;
      }
      return true;
    });

    return tr;
  }

  setNodeIndentMarkup (tr, pos, delta) {
    if (!tr.doc) return tr;

    const node = tr.doc.nodeAt(pos);
    if (!node) return tr;

    const { minIndent, maxIndent } = this.options;

    const indent = clamp(
      (node.attrs.indent || 0) + delta,
      minIndent,
      maxIndent,
    );

    if (indent === node.attrs.indent) return tr;

    const nodeAttrs = {
      ...node.attrs,
      indent,
    };

    return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
  }
}
