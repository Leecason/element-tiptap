import { Doc as TiptapDoc } from 'tiptap';

export default class Doc extends TiptapDoc {
  get defaultOptions() {
    return {
      title: false,
    };
  }

  get schema() {
    const title = !!this.options.title;

    return {
      content: title ? 'title block+' : 'block+',
    };
  }
}
