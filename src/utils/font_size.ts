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

const SIZE_PATTERN = /([\d.]+)(px|pt|pc|in|mm|cm|%|em)/i;

type Conversion = {
  [key: string]: number;
};

const toPixel:Conversion = {
  px: 1,
  pt: 4 / 3,
  in: 96,
  pc: 16,
  mm: 3.78,
  cm: 37.8,
  em: 16,
  '%': 16,
};

export function convertToPX(styleValue: string): string {
  const matches = styleValue.match(SIZE_PATTERN);
  if (!matches) return DEFAULT_FONT_SIZE;
  if (!matches[2]) return DEFAULT_FONT_SIZE;
  const value = parseFloat(matches[1]) * toPixel[matches[2]];
  if (!value) return DEFAULT_FONT_SIZE;
  return value.toString();
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
