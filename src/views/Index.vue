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
  Link,

  CodeBlock,

  BulletList,
  OrderedList,

  HorizontalRule,
  TrailingNode,

  History,
  Placeholder,
} from 'tiptap-extensions';

import {
  Paragraph,
  Heading,
  Blockquote,
  ListItem,
  Image,
  TodoItem,
  TodoList,

  TextAlign,
  Indent,
  LineHeight,
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
        new TextAlign(),
        new Indent(),
        new LineHeight(),

        new Doc(),
        new Text(),
        new Paragraph(),

        new Heading({ level: 5 }),

        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),
        new Link(),
        new Image(),

        new Blockquote(),
        new CodeBlock(),

        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),

        new HorizontalRule(),
        new TrailingNode(),

        new History(),
        new Placeholder({
          emptyNodeClass: 'el-tiptap-editor__placeholder',
        }),
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
