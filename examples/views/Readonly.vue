<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap :extensions="extensions" :content="content" :readonly="true" />
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
  Code,
  ListItem,
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
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 3 }),
        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),
        new Code(),
        new TextAlign(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new Indent(),
        new History(),
      ],

      content:
        '<p>I\' m non-editable now. 😰</p><p></p><p>pass prop <code>readonly: true</code> to the editor.</p>',
    };
  },
};
</script>
