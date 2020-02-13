// @ts-nocheck
import en from './en';
import zh from './zh';
import { warn } from '../utils/console';

const defaultLang = 'en';
const dictionary = {
  en,
  zh,
};

let currentLang: object = dictionary[defaultLang];

export function useLang (l: string): void {
  if (dictionary[l]) {
    currentLang = dictionary[l];
  } else {
    warn(`Can't find the current language "${l}", Using language "${defaultLang}" by default. Welcome contribution to https://github.com/Leecason/element-tiptap`);
    currentLang = dictionary[defaultLang];
  }
}

// @ts-ignore
export function t (path: string): string | object {
  const target = path.split('.').reduce((prev, curr) => {
    // @ts-ignore
    return prev[curr];
  }, currentLang);

  return target;
}
