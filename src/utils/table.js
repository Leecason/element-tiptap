export function isTableActive (state) {
  const { selection, doc } = state;
  const { from, to } = selection;

  let keepLooking = true;
  let active = false;

  doc.nodesBetween(from, to, (node, _pos) => {
    const name = node.type.name;
    if (
      keepLooking &&
      (name === 'table' || name === 'table_row' || name === 'table_column' || name === 'table_cell')
    ) {
      keepLooking = false;
      active = true;
    }
    return keepLooking;
  });

  return active;
}
