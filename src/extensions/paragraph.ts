import { NodeSpec, Node as ProsemirrorNode, DOMOutputSpec } from 'prosemirror-model';
import { Paragraph as TiptapParagraph } from 'tiptap';
import { transformLineHeightToCSS, transformCSStoLineHeight } from '@/utils/line_height';
import { ALIGN_PATTERN } from '@/constants';

export const ParagraphNodeSpec: NodeSpec = {
  attrs: {
    textAlign: { default: null },
    indent: { default: null },
    lineHeight: { default: null },
  },
  content: 'inline*',
  group: 'block',
  parseDOM: [{
    tag: 'p',
    getAttrs,
  }],
  toDOM,
};

// @ts-ignore
function getAttrs(dom): { [key: string]: any } {
  let {
    textAlign,
    lineHeight,
  } = dom.style;

  let align = dom.getAttribute('data-text-align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : null;

  const indent = parseInt(dom.getAttribute('data-indent'), 10) || 0;

  lineHeight = transformCSStoLineHeight(lineHeight) || null;

  return {
    textAlign: align,
    indent,
    lineHeight,
  };
}

function toDOM(node: ProsemirrorNode): DOMOutputSpec {
  const {
    textAlign,
    indent,
    lineHeight,
  } = node.attrs;

  let style = '';
  const attrs: { [key: string]: any } = {};

  if (textAlign && textAlign !== 'left') {
    style += `text-align: ${textAlign};`;
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
  get schema() {
    return ParagraphNodeSpec;
  }
}

export const toParagraphDOM = toDOM;
export const getParagraphNodeAttrs = getAttrs;
