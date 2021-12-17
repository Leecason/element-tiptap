import { Transaction, SelectionRange } from 'prosemirror-state';
import { Node as ProsemirrorNode, MarkType } from 'prosemirror-model';

function markApplies(doc: ProsemirrorNode, ranges: Array<SelectionRange>, type: MarkType): boolean {
  for (let i = 0; i < ranges.length; i++) {
    const { $from, $to } = ranges[i];
    let can = $from.depth === 0 ? doc.type.allowsMarkType(type) : false;
    doc.nodesBetween($from.pos, $to.pos, node => {
      if (can) return false;

      can = node.inlineContent && node.type.allowsMarkType(type);
      return true;
    });
    if (can) return true;
  }
  return false;
}

// https://github.com/ProseMirror/prosemirror-commands/blob/master/src/commands.js
export default function applyMark(tr: Transaction, markType: MarkType, attrs: object | null): Transaction {
  if (!tr.selection || !tr.doc || !markType) return tr;

  // @ts-ignore
  const { empty, $cursor, ranges } = tr.selection;

  if ((empty && !$cursor) || !markApplies(tr.doc, ranges, markType)) return tr;

  if ($cursor) {
    tr = tr.removeStoredMark(markType);
    return attrs ? tr.addStoredMark(markType.create(attrs)) : tr;
  }

  let has = false;
  for (let i = 0; !has && i < ranges.length; i++) {
    const { $from, $to } = ranges[i];
    has = tr.doc.rangeHasMark($from.pos, $to.pos, markType);
  }

  for (let i = 0; i < ranges.length; i++) {
    const { $from, $to } = ranges[i];
    if (has) {
      tr = tr.removeMark($from.pos, $to.pos, markType);
    }
    if (attrs) {
      tr = tr.addMark($from.pos, $to.pos, markType.create(attrs));
    }
  }

  return tr;
}
