import { Node } from 'prosemirror-model';

export function isBulletListNode (node) {
  return node.type.name === 'bullet_list';
}

export function isOrderedListNode (node) {
  return node.type.name === 'order_list';
}

export function isListNode (node) {
  if (node instanceof Node) {
    return isBulletListNode(node) ||
      isOrderedListNode(node);
  }
  return false;
}
