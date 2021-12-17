import { Node } from 'prosemirror-model';

export function isBulletListNode(node: Node): boolean {
  return node.type.name === 'bullet_list';
}

export function isOrderedListNode(node: Node): boolean {
  return node.type.name === 'order_list';
}

export function isTodoListNode(node: Node): boolean {
  return node.type.name === 'todo_list';
}

export function isListNode(node: Node): boolean {
  return isBulletListNode(node) ||
    isOrderedListNode(node) ||
    isTodoListNode(node);
}
