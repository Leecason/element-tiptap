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
  Paragraph,
} from 'tiptap';

import {
  Heading,

  Bold,
  Underline,
  Italic,
  Strike,

  History,
} from 'tiptap-extensions';

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

        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),

        new Heading({ level: 5 }),

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
