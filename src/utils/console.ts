import { ELEMENT_TIPTAP_TIP } from '../constants';

export function warn (msg: string): void {
  // eslint-disable-next-line no-console
  console.warn(`${ELEMENT_TIPTAP_TIP} ${msg}`);
}
