import { ELEMENT_TIPTAP_TIP } from '@/constants';

export default class Logger {
  static warn(msg: string) {
    console.warn(`${ELEMENT_TIPTAP_TIP} ${msg}`);
  }

  static error(msg: string) {
    console.error(`${ELEMENT_TIPTAP_TIP} ${msg}`);
  }
}
