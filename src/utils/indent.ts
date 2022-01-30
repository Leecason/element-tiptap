import type { Command } from '@tiptap/core';
import { TextSelection, AllSelection, Transaction } from 'prosemirror-state';
import { isListNode } from './list';
import { clamp } from './shared';

export const enum IndentProps {
  max = 7,
  min = 0,

  more = 1,
  less = -1,
}

function updateIndentLevel(
  tr: Transaction,
  delta: number,
  types: string[]
): Transaction {
  const { doc, selection } = tr;

  if (!doc || !selection) return tr;

  if (
    !(selection instanceof TextSelection || selection instanceof AllSelection)
  ) {
    return tr;
  }

  const { from, to } = selection;

  doc.nodesBetween(from, to, (node, pos) => {
    const nodeType = node.type;

    if (types.includes(nodeType.name)) {
      tr = setNodeIndentMarkup(tr, pos, delta);
      return false;
    } else if (isListNode(node)) {
      return false;
    }
    return true;
  });

  return tr;
}

function setNodeIndentMarkup(
  tr: Transaction,
  pos: number,
  delta: number
): Transaction {
  if (!tr.doc) return tr;

  const node = tr.doc.nodeAt(pos);
  if (!node) return tr;

  const minIndent = IndentProps.min;
  const maxIndent = IndentProps.max;

  const indent = clamp((node.attrs.indent || 0) + delta, minIndent, maxIndent);

  if (indent === node.attrs.indent) return tr;

  const nodeAttrs = {
    ...node.attrs,
    indent,
  };

  return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
}

export function createIndentCommand({
  delta,
  types,
}: {
  delta: number;
  types: string[];
}): Command {
  return ({ state, dispatch }) => {
    const { selection } = state;
    let { tr } = state;
    tr = tr.setSelection(selection);
    tr = updateIndentLevel(tr, delta, types);

    if (tr.docChanged) {
      dispatch && dispatch(tr);
      return true;
    }

    return false;
  };
}
