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
