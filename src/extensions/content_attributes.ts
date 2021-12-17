import { Extension } from 'tiptap';
import { Plugin } from 'prosemirror-state';

export default class ContentAttributes extends Extension {
  get name() {
    return 'content_attributes';
  }

  get defaultOptions() {
    return {
      spellcheck: true,
    };
  }

  get plugins() {
    return [
      new Plugin({
        props: {
          attributes: {
            ...this.options,
          },
        },
      }),
    ];
  }
}
