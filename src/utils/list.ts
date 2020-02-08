import { NodeSpec } from 'prosemirror-model';

export function isBulletListNode (node: NodeSpec): boolean {
  return node.type.name === 'bullet_list';
}

export function isOrderedListNode (node: NodeSpec): boolean {
  return node.type.name === 'order_list';
}

export function isTodoListNode (node: NodeSpec): boolean {
  return node.type.name === 'todo_list';
}

export function isListNode (node: NodeSpec): boolean {
  return isBulletListNode(node) ||
    isOrderedListNode(node) ||
    isTodoListNode(node);
}
