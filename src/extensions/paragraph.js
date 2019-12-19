import { Paragraph as TiptapParagraph } from 'tiptap';
import { ALIGN_PATTERN } from './text_align';
import { LINE_HEIGHT_VALUE_MAP } from './line_height';
import { transformLineHeightToCSS } from '../utils/line_height';

export const ParagraphNodeSpec = {
  attrs: {
    textAlign: { default: null },
    indent: { default: null },
    lineHeight: { default: '100%' },
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
  let {
    textAlign,
    lineHeight,
  } = dom.style;

  let align = dom.getAttribute('data-text-align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : null;

  const indent = parseInt(dom.getAttribute('data-indent'), 10) || 0;

  lineHeight = lineHeight ? LINE_HEIGHT_VALUE_MAP[lineHeight] : null;

  return {
    textAlign: align,
    indent,
    lineHeight,
  };
}

function toDOM (node) {
  const {
    textAlign,
    indent,
    lineHeight,
  } = node.attrs;

  let style = '';
  const attrs = {};

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  if (indent) {
    attrs['data-indent'] = indent;
  }

  if (lineHeight) {
    const cssLineHeight = transformLineHeightToCSS(lineHeight);
    style += `line-height: ${cssLineHeight};`;
  }

  style && (attrs.style = style);

  return ['p', attrs, 0];
}

export default class Paragraph extends TiptapParagraph {
  get schema () {
    return ParagraphNodeSpec;
  }
}

export const toParagraphDOM = toDOM;
export const getParagraphNodeAttrs = getAttrs;
