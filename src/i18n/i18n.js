// Codes from https://github.com/iliyaZelenko/tiptap-vuetify/blob/master/src/i18n/index.ts
import en from './en';
import zh from './zh';
import { ElementTiptapPlugin } from '../index';
export const defaultLanguage = 'en';
export const dictionary = {
  en,
  zh
};
export function getCurrentLang () {
  return ElementTiptapPlugin.currentLang || defaultLanguage;
}

export function getMsg (path, args) {
  let currentLang = getCurrentLang();
  if (!dictionary[currentLang]) {
    currentLang = defaultLanguage;
    console.warn(
      `The current language "${ElementTiptapPlugin.currentLang}" is not yet available. Using language "${defaultLanguage}" by default. Contribution to github is welcome.`
    );
  }
  const dictionaryByLang = dictionary[currentLang];
  const target = path.split('.').reduce((prev, curr) => {
    return prev[curr];
  }, dictionaryByLang);
  if (target instanceof Function) {
    return target(args);
  }
  return target;
}
