import { Paragraph as TiptapParagraph } from 'tiptap';

import { ALIGN_PATTERN } from './text_align';

export const ParagraphNodeSpec = {
  attrs: {
    textAlign: { default: null },
    indent: { default: null },
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

  const indent = parseInt(dom.getAttribute('data-indent'), 10) || 0;

  return {
    textAlign: align,
    indent,
  };
}

function toDOM (node) {
  const {
    textAlign,
    indent,
  } = node.attrs;

  const attrs = {};

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  if (indent) {
    attrs['data-indent'] = indent;
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
