<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap :extensions="extensions" :content="content" :readonly="true" />
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
  Code,
  BulletList,
  OrderedList,
  TextAlign,
  Indent,
  History,
} from 'element-tiptap';

const extensions = [
  Document,
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
];

const content =
  "<p>I' m non-editable now. 😰</p><p></p><p>pass prop <code>readonly: true</code> to the editor.</p>";
</script>
