<template>
  <el-container>
    <el-header>ElTiptap</el-header>
    <el-main>
      <div class="el-tiptap-editor__wrapper">
        <el-tiptap :extensions="extensions" />
      </div>
    </el-main>
  </el-container>
</template>

<script>
import {
  Doc,
  Text,
} from 'tiptap';

import {
  Bold,
  Underline,
  Italic,
  Strike,

  BulletList,
  OrderedList,

  History,
} from 'tiptap-extensions';

import {
  Paragraph,
  Heading,
  ListItem,

  TextAlign,
} from '@/extensions';

import ElTiptap from '../components/ElTiptap';

export default {
  name: 'index',

  components: {
    ElTiptap,
  },

  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),

        new TextAlign(),

        new Heading({ level: 5 }),

        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),

        new ListItem(),
        new BulletList(),
        new OrderedList(),

        new History(),
      ],
    };
  },
};
</script>

<style lang="scss">
.el-header {
  align-items: center;
  display: flex;
}

.el-main {
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.el-tiptap-editor {
  &__wrapper {
    margin-top: 50px;
    width: 75vw;
  }
}
</style>
