import { ListItem as TiptapListItem } from 'tiptap-extensions';
import { ALIGN_PATTERN } from './text_align';
import { LINE_HEIGHT_100, transformLineHeightToCSS } from '../utils/line_height';

const ListItemNodeSpec = {
  attrs: {
    textAlign: { default: null },
    lineHeight: { default: null },
  },
  content: 'paragraph block*',
  defining: true,
  draggable: false,
  parseDOM: [{
    tag: 'li',
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

  lineHeight = (lineHeight && lineHeight !== transformLineHeightToCSS(LINE_HEIGHT_100)) ? lineHeight : null;

  return {
    textAlign: align,
    lineHeight,
  };
}

function toDOM (node) {
  const {
    textAlign,
    lineHeight,
  } = node.attrs;

  let style = '';
  const attrs = {};

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  if (lineHeight) {
    const cssLineHeight = transformLineHeightToCSS(lineHeight);
    style += `line-height: ${cssLineHeight};`;
  }

  style && (attrs.style = style);

  return ['li', attrs, 0];
}

export default class ListItem extends TiptapListItem {
  get schema () {
    return ListItemNodeSpec;
  }
}
