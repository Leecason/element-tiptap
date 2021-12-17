import { NodeSpec, Node as ProsemirrorNode, DOMOutputSpec } from 'prosemirror-model';
import { ListItem as TiptapListItem } from 'tiptap-extensions';
import { transformLineHeightToCSS } from '@/utils/line_height';
import { ALIGN_PATTERN, LINE_HEIGHT_100 } from '@/constants';

const ListItemNodeSpec: NodeSpec = {
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

// @ts-ignore
function getAttrs(dom) {
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

function toDOM(node: ProsemirrorNode): DOMOutputSpec {
  const {
    textAlign,
    lineHeight,
  } = node.attrs;

  let style = '';
  const attrs: { [key: string]: any } = {};

  if (textAlign && textAlign !== 'left') {
    style += `text-align: ${textAlign}`;
  }

  if (lineHeight) {
    const cssLineHeight = transformLineHeightToCSS(lineHeight);
    style += `line-height: ${cssLineHeight};`;
  }

  style && (attrs.style = style);

  return ['li', attrs, 0];
}

export default class ListItem extends TiptapListItem {
  get schema() {
    return ListItemNodeSpec;
  }
}
