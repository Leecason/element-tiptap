import { Doc, Text } from 'tiptap';

import {
  Bold,
  Underline,
  Italic,
  Strike,
  Link,

  CodeBlock,

  BulletList,
  OrderedList,

  HorizontalRule,
  TrailingNode,

  History,
  Placeholder,
} from 'tiptap-extensions';

// nodes
import Paragraph from './paragraph';
import Heading from './heading';
import Blockquote from './blockquote';
import ListItem from './list_item';
import Image from './image';
import TodoItem from './todo_item';
import TodoList from './todo_list';

// extensions
import TextAlign from './text_align';
import Indent from './indent';
import LineHeight from './line_height';

const EXTENSION_MAP = new Map([
  ['Doc', Doc],
  ['Text', Text],
  ['Paragraph', Paragraph],
  ['Bold', Bold],
  ['Underline', Underline],
  ['Italic', Italic],
  ['Strike', Strike],
  ['Heading', Heading],
  ['Link', Link],
  ['Blockquote', Blockquote],
  ['CodeBlock', CodeBlock],
  ['ListItem', ListItem],
  ['BulletList', BulletList],
  ['OrderedList', OrderedList],
  ['Image', Image],
  ['TodoItem', TodoItem],
  ['TodoList', TodoList],
  ['HorizontalRule', HorizontalRule],
  ['TrailingNode', TrailingNode],
  ['History', History],
  ['Placeholder', Placeholder],
  ['TextAlign', TextAlign],
  ['Indent', Indent],
  ['LineHeight', LineHeight],
]);

export default EXTENSION_MAP;
