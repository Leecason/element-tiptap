import { Paragraph as TiptapParagraph } from 'tiptap';

import { ALIGN_PATTERN } from './text_align';

export const ParagraphNodeSpec = {
  attrs: {
    textAlign: { default: null },
  },
  content: 'inline*',
  group: 'block',
  parseDOM: [{
    tag: 'p',
    getAttrs,
  }],
  toDOM,
};

function getAttrs (dom) {
  const {
    textAlign,
  } = dom.style;

  let align = dom.getAttribute('align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : null;

  return {
    textAlign: align,
  };
}

function toDOM (node) {
  const {
    textAlign,
  } = node.attrs;

  const attrs = {};

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  return ['p', attrs, 0];
}

export default class Paragraph extends TiptapParagraph {
  get schema () {
    return ParagraphNodeSpec;
  }
}

export const toParagraphDOM = toDOM;
export const getParagraphNodeAttrs = getAttrs;
