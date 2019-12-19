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

const NUMBER_VALUE_PATTERN = /^\d+(.\d+)?$/;

export function transformLineHeightToCSS (value) {
  if (!value) return '';

  let strValue = String(value);

  if (NUMBER_VALUE_PATTERN.test(strValue)) {
    const numValue = parseFloat(strValue);
    strValue = String(Math.round(numValue * 100)) + '%';
  }

  return strValue;
}
