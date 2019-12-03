import { Extension } from 'tiptap';
import { TextSelection, AllSelection } from 'prosemirror-state';

const ALLOWED_NODE_TYPES = [
  'paragraph',
  'heading',
  'list_item',
];

const LINE_HEIGHT_100 = '100%';
const LINE_HEIGHT_125 = '125%';
const LINE_HEIGHT_150 = '150%';
const LINE_HEIGHT_175 = '175%';
const LINE_HEIGHT_200 = '200%';

export const LINE_HEIGHT_VALUE_MAP = {
  LINE_HEIGHT_100,
  LINE_HEIGHT_125,
  LINE_HEIGHT_150,
  LINE_HEIGHT_175,
  LINE_HEIGHT_200,
};

const NUMBER_VALUE_PATTERN = /^\d+(.\d+)?$/;

export default class LineHeight extends Extension {
  get name () {
    return 'line_height';
  }

  get defaultOptions () {
    return {
      lineHeights: [
        LINE_HEIGHT_100,
        LINE_HEIGHT_125,
        LINE_HEIGHT_150,
        LINE_HEIGHT_175,
        LINE_HEIGHT_200,
      ],
    };
  }

  commands () {
    return ({ lineHeight }) => this.createLineHeightCommand(lineHeight);
  }

  createLineHeightCommand (lineHeight) {
    return (state, dispatch) => {
      const { selection } = state;
      let { tr } = state;
      tr = tr.setSelection(selection);

      tr = this.setTextLineHeight(tr, lineHeight);

      if (tr.docChanged) {
        dispatch && dispatch(tr);
        return true;
      }

      return false;
    };
  }

  setTextLineHeight (tr, lineHeight) {
    const { selection, doc } = tr;

    if (!selection || !doc) return tr;

    if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
      return tr;
    }

    const { from, to } = selection;

    const jobs = [];
    const lineHeightValue = lineHeight || null;

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
        return nodeType.name === 'list_item';
      }
      return true;
    });

    if (!jobs.length) return tr;

    jobs.forEach(job => {
      const { node, pos, nodeType } = job;
      let { attrs } = node;

      if (lineHeightValue) {
        attrs = {
          ...attrs,
          lineHeight: lineHeightValue,
        };
      } else {
        attrs = {
          ...attrs,
          lineHeight: null,
        };
      }
      tr = tr.setNodeMarkup(pos, nodeType, attrs, node.marks);
    });

    return tr;
  }
}

export function transformLineHeightToCSS (value) {
  if (!value) return '';

  let strValue = String(value);

  if (NUMBER_VALUE_PATTERN.test(strValue)) {
    const numValue = parseFloat(strValue);
    strValue = String(Math.round(numValue * 100)) + '%';
  }

  return strValue;
}

export function isLineHeightActive (state, lineHeight) {
  const { selection, doc } = state;
  const { from, to } = selection;

  let keepLooking = true;
  let active = false;

  doc.nodesBetween(from, to, (node, _pos) => {
    const nodeType = node.type;
    if (
      keepLooking &&
      (nodeType.name === 'paragraph' || nodeType.name === 'heading') &&
      node.attrs.lineHeight === lineHeight
    ) {
      keepLooking = false;
      active = true;
    }
    return keepLooking;
  });

  return active;
}
