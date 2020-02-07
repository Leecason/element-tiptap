const TIP:string = '[Element-Tiptap Tip]';

export function warn (msg: string) :void {
  // eslint-disable-next-line no-console
  console.warn(`${TIP} ${msg}`);
}
