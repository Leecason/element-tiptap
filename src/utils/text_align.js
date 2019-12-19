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
