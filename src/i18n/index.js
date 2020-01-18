import defaultLang from './en/index';

export function t (path) {
  const lang = defaultLang;

  const target = path.split('.').reduce((prev, curr) => {
    return prev[curr];
  }, lang);

  return target;
}
