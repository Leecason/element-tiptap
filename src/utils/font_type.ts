// @ts-ignore
import { getMarkAttrs } from 'tiptap-utils';
import { Transaction, TextSelection, AllSelection, EditorState } from 'prosemirror-state';
import { Mark as ProsemirrorMark, MarkType } from 'prosemirror-model';
import applyMark from './apply_mark';

const DEFAULT_FONT_TYPE_NAMES = [
  'Arial',
  'Arial Black',
  'Georgia',
  'Impact',
  'Tahoma',
  'Times New Roman',
  'Verdana',
  'Courier New',
  'Lucida Console',
  'Monaco',
  'monospace',
];

export const DEFAULT_FONT_TYPE_MAP = DEFAULT_FONT_TYPE_NAMES.reduce((obj: { [key: string]: string }, type: string) => {
  obj[type] = type;
  return obj;
}, {});

export function setFontType(tr: Transaction, type: MarkType, name: string): Transaction {
  const { selection } = tr;

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
    return tr;
  }
  const attrs = name ? { name } : null;
  tr = applyMark(tr, type, attrs);
  return tr;
}

const DEFAULT_FONT_TYPE = '';

export function findActiveFontType(state: EditorState): string {
  const { schema, selection, tr } = state;
  const markType = schema.marks.font_type;

  if (!markType) return DEFAULT_FONT_TYPE;

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
    return (sm && sm.attrs.name) || DEFAULT_FONT_TYPE;
  }

  const attrs = getMarkAttrs(state, markType);
  const fontName = attrs.name;

  if (!fontName) return DEFAULT_FONT_TYPE;

  return fontName;
}
