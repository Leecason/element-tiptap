import { TextSelection, AllSelection } from 'prosemirror-state';

export const LINE_HEIGHT_100 = '1.7';

const DEFAULT_LINE_HEIGHT = '100%';

export const ALLOWED_NODE_TYPES = [
  'paragraph',
  'heading',
  'list_item',
  'todo_item',
];

const NUMBER_VALUE_PATTERN = /^\d+(.\d+)?$/;

export function isLineHeightActive (state, lineHeight) {
  const { selection, doc } = state;
  const { from, to } = selection;

  let keepLooking = true;
  let active = false;

  doc.nodesBetween(from, to, (node, _pos) => {
    const nodeType = node.type;
    const lineHeightValue = node.attrs.lineHeight || DEFAULT_LINE_HEIGHT;

    if (ALLOWED_NODE_TYPES.includes(nodeType.name)) {
      if (keepLooking && lineHeight === lineHeightValue) {
        keepLooking = false;
        active = true;

        return false;
      }
      return nodeType.name !== 'list_item' && nodeType.name !== 'todo_item';
    }
    return keepLooking;
  });

  return active;
}

export function transformLineHeightToCSS (value) {
  if (!value) return '';

  let strValue = String(value);

  if (NUMBER_VALUE_PATTERN.test(strValue)) {
    const numValue = parseFloat(strValue);
    strValue = String(Math.round(numValue * 100)) + '%';
  }

  return parseFloat(value) * LINE_HEIGHT_100 + '%'; ;
}

export function setTextLineHeight (tr, lineHeight) {
  const { selection, doc } = tr;

  if (!selection || !doc) return tr;

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
    return tr;
  }

  const { from, to } = selection;

  const jobs = [];
  const lineHeightValue = (lineHeight && lineHeight !== DEFAULT_LINE_HEIGHT) ? lineHeight : null;

  doc.nodesBetween(from, to, (node, pos) => {
    const nodeType = node.type;
    if (ALLOWED_NODE_TYPES.includes(nodeType.name)) {
      const lineHeight = node.attrs.lineHeight || null;
      if (lineHeight !== lineHeightValue) {
        jobs.push({
          node,
          pos,
          nodeType,
        });
      }
      return nodeType.name !== 'list_item' && nodeType.name !== 'todo_item';
    }
    return true;
  });

  if (!jobs.length) return tr;

  jobs.forEach(job => {
    const { node, pos, nodeType } = job;
    let { attrs } = node;

    attrs = {
      ...attrs,
      lineHeight: lineHeightValue,
    };

    tr = tr.setNodeMarkup(pos, nodeType, attrs, node.marks);
  });

  return tr;
}
