// @ts-nocheck
import Logger from '@/utils/logger';
import en from './en';
import zh from './zh';
import zh_tw from './zh-tw';
import pl from './pl';
import ru from './ru';
import de from './de';
import ko from './ko';
import es from './es';

const defaultLang = 'en';
const dictionary = {
  en,
  zh,
  zh_tw,
  pl,
  ru,
  de,
  ko,
  es,
};

let currentLang: object = dictionary[defaultLang];

export function useLang (l: string): void {
  if (dictionary[l]) {
    currentLang = dictionary[l];
  } else {
    Logger.warn(`Can't find the current language "${l}", Using language "${defaultLang}" by default. Welcome contribution to https://github.com/Leecason/element-tiptap`);
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
