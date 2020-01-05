export function isTextAlignActive (state, align) {
  const { selection, doc } = state;
  const { from, to } = selection;

  let keepLooking = true;
  let active = false;

  doc.nodesBetween(from, to, (node, _pos) => {
    if (keepLooking && node.attrs.textAlign === align) {
      keepLooking = false;
      active = true;
    }
    return keepLooking;
  });

  return active;
}

const ALLOWED_NODE_TYPES = [
  'paragraph',
  'heading',
  'list_item',
];

export function setTextAlign (tr, alignment) {
  const { selection, doc } = tr;

  if (!selection || !doc) {
    return tr;
  }

  const { from, to } = selection;

  const jobs = [];
  alignment = alignment || null;

  doc.nodesBetween(from, to, (node, pos) => {
    const nodeType = node.type;
    const align = node.attrs.textAlign || null;
    if (align !== alignment && ALLOWED_NODE_TYPES.includes(nodeType.name)) {
      jobs.push({
        node,
        pos,
        nodeType,
      });
    }
    return true;
  });

  if (!jobs.length) return tr;

  jobs.forEach(job => {
    const { node, pos, nodeType } = job;
    let { attrs } = node;
    attrs = {
      ...attrs,
      textAlign: alignment,
    };

    tr = tr.setNodeMarkup(pos, nodeType, attrs, node.marks);
  });

  return tr;
}
