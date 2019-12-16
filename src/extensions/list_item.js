import { ListItem as TiptapListItem } from 'tiptap-extensions';

import { ALIGN_PATTERN } from './text_align';

const ListItemNodeSpec = {
  attrs: {
    textAlign: { default: null },
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
  const attrs = {};
  const { textAlign } = dom.style;
  let align = dom.getAttribute('data-text-align') || textAlign || '';
  align = ALIGN_PATTERN.test(align) ? align : null;

  if (align) {
    attrs.textAlign = align;
  }
  return attrs;
}

function toDOM (node) {
  const {
    textAlign,
  } = node.attrs;

  const attrs = {};

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign;
  }

  return ['li', attrs, 0];
}

export default class ListItem extends TiptapListItem {
  get schema () {
    return ListItemNodeSpec;
  }
}
