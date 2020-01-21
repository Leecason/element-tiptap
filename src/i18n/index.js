import en from './en';
import zh from './zh';

const defaultLang = 'en';
const dictionary = {
  en,
  zh,
};

let currentLang = dictionary[defaultLang];

export function useLang (l) {
  if (dictionary[l]) {
    currentLang = dictionary[l];
  } else {
    console.warn(`[Element-Tiptap Tip] Can't find the current language "${l}", Using language "${defaultLang}" by default. Welcome contribution to https://github.com/Leecason/element-tiptap`);
    currentLang = dictionary[defaultLang];
  }
}

export function t (path) {
  const target = path.split('.').reduce((prev, curr) => {
    return prev[curr];
  }, currentLang);

  return target;
}
