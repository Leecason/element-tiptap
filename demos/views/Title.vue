<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap :extensions="extensions" :content="content" />
  </div>
</template>

<script>
import {
  Document,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  BulletList,
  OrderedList,
  TextAlign,
  Indent,
  History,
} from 'element-tiptap';

export default {
  data() {
    return {
      extensions: [
        Document.configure({ title: true }),
        Text,
        Paragraph,
        Heading.configure({ level: 3 }),
        Bold,
        Underline,
        Italic,
        Strike,
        Code,
        TextAlign,
        BulletList,
        OrderedList,
        Indent,
        History,
      ],
      content: '<h1>Title Line</h1><p>The body content</p>',
    };
  },
};
</script>
