import { findParentNodeOfType } from 'prosemirror-utils';

function findHeading (state) {
  const { heading } = state.schema.nodes;
  return findParentNodeOfType(heading)(state.selection);
}

export function isHeadingActive (state, level) {
  const result = findHeading(state);

  if (level == null) {
    return !!result;
  }

  return !!(
    result &&
    result.node &&
    result.node.attrs &&
    result.node.attrs.level === level
  );
}
