import { Node } from 'tiptap';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { getParagraphNodeAttrs, toParagraphDOM } from './paragraph';

export default class Title extends Node {
  get name () {
    return 'title';
  }

  get schema () {
    return {
      attrs: {
        textAlign: { default: null },
      },
      content: 'inline*',
      parseDOM: [{
        tag: 'h1',
        getAttrs: getParagraphNodeAttrs,
      }],
      toDOM: (node: ProsemirrorNode) => {
        const dom = toParagraphDOM(node);
        // @ts-ignore
        dom[0] = 'h1';
        return dom;
      },
    };
  }
}
