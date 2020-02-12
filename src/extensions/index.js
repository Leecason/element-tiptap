export { Doc, Text } from 'tiptap';

export {
  HardBreak,
  TrailingNode,
  Placeholder,
  TableHeader,
  TableCell,
  TableRow,
} from 'tiptap-extensions';

// nodes
export { default as Paragraph } from './paragraph.ts';
export { default as Heading } from './heading.ts';
export { default as Blockquote } from './blockquote.ts';
export { default as CodeBlock } from './code_block.ts';
export { default as ListItem } from './list_item';
export { default as BulletList } from './bullet_list.ts';
export { default as OrderedList } from './ordered_list.ts';
export { default as Image } from './image.ts';
export { default as TodoItem } from './todo_item';
export { default as TodoList } from './todo_list';
export { default as Table } from './table.ts';
export { default as Iframe } from './iframe.ts';

// marks
export { default as Bold } from './bold.ts';
export { default as Underline } from './underline.ts';
export { default as Italic } from './italic.ts';
export { default as Strike } from './strike.ts';
export { default as Link } from './link.ts';
export { default as TextColor } from './text_color';
export { default as TextHighlight } from './text_highlight';

// extensions
export { default as HorizontalRule } from './horizontal_rule.ts';
export { default as History } from './history.ts';
export { default as TextAlign } from './text_align';
export { default as Indent } from './indent';
export { default as LineHeight } from './line_height';
export { default as FormatClear } from './format_clear';
