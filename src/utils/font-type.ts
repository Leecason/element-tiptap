const DEFAULT_FONT_FAMILY_NAMES = [
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

export const DEFAULT_FONT_FAMILY_MAP = DEFAULT_FONT_FAMILY_NAMES.reduce(
  (obj: { [key: string]: string }, type: string) => {
    obj[type] = type;
    return obj;
  },
  {}
);
