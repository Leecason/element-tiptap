import { EditorState, Transaction } from 'prosemirror-state';
import { Node as ProsemirrorNode, NodeType } from 'prosemirror-model';
import { Alignment } from '@/constants';

export function isTextAlignActive(
  state: EditorState,
  alignment: Alignment
): boolean {
  const { selection, doc } = state;
  const { from, to } = selection;

  let keepLooking = true;
  let active = false;

  doc.nodesBetween(from, to, node => {
    if (keepLooking && node.attrs.textAlign === alignment) {
      keepLooking = false;
      active = true;
    }
    return keepLooking;
  });

  return active;
}

const ALLOWED_NODE_TYPES = [
  'paragraph',
  'heading',
  'list_item',
  'todo_item',
  'title',
];

interface SetTextAlignTask {
  node: ProsemirrorNode;
  nodeType: NodeType;
  pos: number;
}

export function setTextAlign(
  tr: Transaction,
  alignment: Alignment | null
): Transaction {
  const { selection, doc } = tr;

  if (!selection || !doc) {
    return tr;
  }

  const { from, to } = selection;

  const tasks: Array<SetTextAlignTask> = [];
  alignment = alignment || null;

  doc.nodesBetween(from, to, (node, pos) => {
    const nodeType = node.type;
    if (ALLOWED_NODE_TYPES.includes(nodeType.name)) {
      const align = node.attrs.textAlign || null;
      if (align !== alignment) {
        tasks.push({
          node,
          pos,
          nodeType,
        });

        return nodeType.name !== 'list_item' && nodeType.name !== 'todo_item';
      }
    }
    return true;
  });

  if (!tasks.length) return tr;

  tasks.forEach(job => {
    const { node, pos, nodeType } = job;
    let { attrs } = node;
    attrs = {
      ...attrs,
      textAlign: alignment,
    };

    tr = tr.setNodeMarkup(pos, nodeType, attrs, node.marks);
  });

  return tr;
}
