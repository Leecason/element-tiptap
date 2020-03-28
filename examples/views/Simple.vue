<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      :content="content"
      :spellcheck="false"
      placeholder="Write something ..."
    />
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
  Link,
  Image,
  Blockquote,
  ListItem,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  TextAlign,
  Indent,
  HardBreak,
  HorizontalRule,
  History,
} from 'element-tiptap';

export default {
  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }),
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new Code(),
        new Link({ bubble: true }),
        new Image(),
        new Blockquote(),
        new TextAlign(),
        new ListItem(),
        new BulletList({ bubble: true }),
        new OrderedList({ bubble: true }),
        new TodoItem(),
        new TodoList(),
        new Indent(),
        new HardBreak(),
        new HorizontalRule({ bubble: true }),
        new History(),
      ],

      content: '<h2 data-text-align="center">Welcome To Element Tiptap Editor Demo</h2><p>🔥<strong>Element Tiptap Editor </strong>🔥is a WYSIWYG rich-text editor using&nbsp;<a href="https://github.com/scrumpy/tiptap" rel="noopener noreferrer nofollow">tiptap</a>&nbsp;and <a href="https://github.com/ElemeFE/element" rel="noopener noreferrer nofollow">element-ui</a>&nbsp;for Vue.js<image src="https://i.ibb.co/nbRN3S2/undraw-upload-87y9.png" alt="" title="" height="200" data-display="right"></image> that\'s easy to use, friendly to developers, fully extensible and clean in design.</p><p></p><p data-text-align="right">👉Click on the image to get started image features 👉</p><p></p><p><strong>Got questions or need help or feature request? </strong></p><p>🚀<strong>welcome to submit an <a href="https://github.com/Leecason/element-tiptap/issues" rel="noopener noreferrer nofollow">issue</a></strong> 😊</p><p>I\'m continuously working to add in new features.</p><p></p><blockquote><p>This demo is simple, switch tab for more features.</p><p>All demos source code: <a href="https://github.com/Leecason/element-tiptap/blob/master/examples/views/Index.vue" rel="noopener noreferrer nofollow">source code 🔗</a></p></blockquote>',
    };
  },
};
</script>
