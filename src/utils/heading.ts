import { findParentNodeOfType } from 'prosemirror-utils';
import { EditorState } from 'prosemirror-state';

function findHeading(state: EditorState) {
  const { heading } = state.schema.nodes;
  return findParentNodeOfType(heading)(state.selection);
}

export function isHeadingActive(state: EditorState, level: number): boolean {
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
