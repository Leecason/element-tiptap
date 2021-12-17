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
import fr from './fr';
import pt_br from './pt-br';
import nl from './nl';
import he from './he';

export const DEFAULT_LANGUAGE = 'en';
const dictionary = {
  en,
  zh,
  zh_tw,
  pl,
  ru,
  de,
  ko,
  es,
  fr,
  pt_br,
  nl,
  he,
};

export const Trans = {
  get defaultLanguage() {
    return DEFAULT_LANGUAGE;
  },

  get supportedLanguages(): string[] {
    return Object.keys(dictionary);
  },

  loadLanguage(lang): Object {
    return dictionary[lang];
  },

  isLangSupported(lang): boolean {
    return this.supportedLanguages.includes(lang);
  },

  buildI18nHandler(lang: string = DEFAULT_LANGUAGE): Function {
    let l;

    if (!this.isLangSupported(lang)) {
      Logger.warn(
        `Can't find the current language "${lang}", Using language "${DEFAULT_LANGUAGE}" by default. Welcome contribution to https://github.com/Leecason/element-tiptap`
      );
      l = DEFAULT_LANGUAGE;
    } else {
      l = lang;
    }

    const langObj = this.loadLanguage(l);

    return function t(path: string): string {
      const target = path.split('.').reduce((prev, curr) => {
        // @ts-ignore
        return prev[curr];
      }, langObj);

      return target;
    };
  },
};
