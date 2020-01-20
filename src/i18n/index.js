import { getMsg } from './i18n';

class I18nText {
  constructor (path, args) {
    this.text = getMsg(path, args);
  }

  toString () {
    return this.text;
  }
}

export default function i18n (path, args) {
  return new I18nText(path, args).toString();
}
