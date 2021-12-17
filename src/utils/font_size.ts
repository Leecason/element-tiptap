// @ts-ignore
import { getMarkAttrs } from 'tiptap-utils';
import { Transaction, TextSelection, AllSelection, EditorState } from 'prosemirror-state';
import { Mark as ProsemirrorMark, MarkType } from 'prosemirror-model';
import applyMark from './apply_mark';

export const DEFAULT_FONT_SIZES = [
  '8',
  '10',
  '12',
  '14',
  '16',
  '18',
  '20',
  '24',
  '30',
  '36',
  '48',
  '60',
  '72',
];

export const DEFAULT_FONT_SIZE = 'default';

const SIZE_PATTERN = /([\d.]+)px/i;

export function convertToPX(styleValue: string): string {
  const matches = styleValue.match(SIZE_PATTERN);
  if (!matches) return '';
  const value = matches[1];
  if (!value) return '';
  return value;
}

export function setFontSize(tr: Transaction, type: MarkType, fontSize: string): Transaction {
  const { selection } = tr;

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
    return tr;
  }

  const attrs = (fontSize && fontSize !== DEFAULT_FONT_SIZE) ? { px: fontSize } : null;
  tr = applyMark(tr, type, attrs);
  return tr;
}

export function findActiveFontSize(state: EditorState): string {
  const { schema, selection, tr } = state;
  const markType = schema.marks.font_size;

  if (!markType) return DEFAULT_FONT_SIZE;

  const { empty } = selection;

  if (empty) {
    const storedMarks = tr.storedMarks ||
      state.storedMarks ||
      (
        selection instanceof TextSelection &&
        selection.$cursor &&
        selection.$cursor.marks &&
        selection.$cursor.marks()
      ) ||
      [];

    const sm = storedMarks.find((m: ProsemirrorMark) => m.type === markType);
    return sm ? String(sm.attrs.px || DEFAULT_FONT_SIZE) : DEFAULT_FONT_SIZE;
  }

  const attrs = getMarkAttrs(state, markType);
  const fontSize = attrs.px;
  if (fontSize) return String(fontSize);

  return DEFAULT_FONT_SIZE;
}
