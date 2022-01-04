<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap :extensions="extensions" :content="content" />
  </div>
</template>

<script>
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  Link,
  Blockquote,
  Code,
  CodeBlock,
  ListItem,
  BulletList,
  OrderedList,
  TextAlign,
  TextColor,
  Indent,
  HardBreak,
  LineHeight,
  HorizontalRule,
  TrailingNode,
  FormatClear,
  History,
} from 'element-tiptap';

export default {
  data() {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new TextColor(),
        new Bold({ bubble: true }),
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new Link({ bubble: true }),
        new Blockquote({ bubble: true }),
        new Code(),
        new CodeBlock({ bubble: true }),
        new TextAlign({ bubble: true }),
        new LineHeight({ bubble: true }),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new Indent({ bubble: true }),
        new HardBreak(),
        new HorizontalRule(),
        new TrailingNode(),
        new FormatClear(),
        new History(),
      ],

      content:
        '<h1>Bubble Menu</h1><p>Try to select some text here. There will popup a menu for some commands.</p><p>Pass a property <code>bubble: true</code> to extension is all you need to do.</p>',
    };
  },
};
</script>
