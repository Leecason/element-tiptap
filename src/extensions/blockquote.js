import { Blockquote as TiptapBlockquote } from 'tiptap-extensions';

import { ParagraphNodeSpec, getParagraphNodeAttrs, toParagraphDOM } from './paragraph';

const BlockquoteNodeSpec = {
  ...ParagraphNodeSpec,
  content: 'block*',
  defining: true,
  parseDOM: [{
    tag: 'blockquote',
    getAttrs,
  }],
  toDOM,
};

function getAttrs (dom) {
  return getParagraphNodeAttrs(dom);
}

function toDOM (node) {
  const dom = toParagraphDOM(node);
  dom[0] = 'blockquote';
  return dom;
}

export default class Blockquote extends TiptapBlockquote {
  get schema () {
    return BlockquoteNodeSpec;
  }
}
