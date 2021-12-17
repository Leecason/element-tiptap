// https://github.com/regexhq/hex-color-regex/blob/master/index.js
function hexColorRegex(): RegExp {
  return /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi;
}

export const COLOR_SET: string[] = [
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
  '#000000',
];

export function isHexColor(color: string): boolean {
  return hexColorRegex().test(color);
}
