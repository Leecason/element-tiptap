<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap :extensions="extensions" :content="content" />
  </div>
</template>

<script setup>
import {
  Document,
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
  BulletList,
  OrderedList,
  TextAlign,
  Color,
  Indent,
  HardBreak,
  LineHeight,
  HorizontalRule,
  FormatClear,
  History,
} from 'element-tiptap';

const extensions = [
  Document,
  Text,
  Paragraph,
  Heading.configure({ level: 5 }),
  Color,
  Bold.configure({ bubble: true }),
  Underline.configure({ bubble: true }),
  Italic.configure({ bubble: true }),
  Strike.configure({ bubble: true }),
  Link.configure({ bubble: true }),
  Blockquote.configure({ bubble: true }),
  Code,
  CodeBlock.configure({ bubble: true }),
  TextAlign.configure({ bubble: true }),
  LineHeight.configure({ bubble: true }),
  BulletList,
  OrderedList,
  Indent.configure({ bubble: true }),
  HardBreak,
  HorizontalRule,
  FormatClear,
  History,
];

const content =
  '<h1>Bubble Menu</h1><p>Try to select some text here. There will popup a menu for some commands.</p><p>Pass a property <code>bubble: true</code> to extension is all you need to do.</p>';
</script>
