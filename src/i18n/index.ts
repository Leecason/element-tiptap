import en from './locales/en';

export const Trans = {
  buildI18nHandler(locale: Object = en): Function {
    return function t(path: string): string {
      const target = path.split('.').reduce((prev, curr) => {
        // @ts-ignore
        return prev[curr];
      }, locale);

      return target as string;
    };
  },
};
