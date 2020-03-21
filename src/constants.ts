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

export const enum EVENTS {
  INIT = 'init',
  TRANSACTION = 'transaction',
  FOCUS = 'focus',
  BLUR = 'blur',
  PASTE = 'paste',
  DROP = 'drop',
  UPDATE = 'update',
};

export const PREVIEW_WINDOW_WIDTH: string = '80vw';
