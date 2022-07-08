<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      placeholder="Do you like this editor ? 👏"
    />
  </div>
</template>

<script setup>
import {
  Document,
  Text,
  Paragraph,
  Bold,
  Underline,
  Italic,
  Strike,
  BulletList,
  OrderedList,
  History,
} from 'element-tiptap';

const extensions = [
  Document,
  Text,
  Paragraph,
  Bold,
  Underline,
  Italic,
  Strike,
  BulletList,
  OrderedList,
  History,
];
</script>
