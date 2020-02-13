export const ELEMENT_TIPTAP_TIP = '[Element-Tiptap Tip]';

export const enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
  justify = 'justify'
}
export const ALIGN_PATTERN: RegExp = new RegExp(`(${Alignment.left}|${Alignment.center}|${Alignment.right}|${Alignment.justify})`);

export const LINE_HEIGHT_100 = 1.7;
export const DEFAULT_LINE_HEIGHT = '100%';

export const PREDEFINED_COLORS: string[] = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
];
