<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      lang="en"
      :extensions="extensions"
      :content="content"
      :spellcheck="false"
      :menu-bubble-options="{ 'keep-in-bounds': false }"
      placeholder="Write something ..."
    />
  </div>
</template>

<script>
import {
  Blockquote,
  Bold,
  BulletList,
  CodeBlock,
  CodeView,
  Doc,
  ElementTiptap,
  Fullscreen,
  HardBreak,
  Heading,
  History,
  HorizontalRule,
  Image,
  Iframe,
  Indent,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Paragraph,
  Strike,
  Text,
  TextAlign,
  TodoItem,
  TodoList,
  Underline,
} from 'element-tiptap';

import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css'; // import base style
import 'codemirror/mode/xml/xml.js'; // language
import 'codemirror/addon/selection/active-line.js'; // require active-line.js
import 'codemirror/addon/edit/closetag.js'; // autoCloseTags

export default {
  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 1, floating: true }),
        new Bold(),
        new Underline(),
        new Italic(),
        new Blockquote({ floating: true }),
        new Strike(),
        new CodeBlock({ floating: true }),
        new Link(),
        new Iframe({ floating: true }),
        new Image({ floating: true }),
        new TextAlign(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Indent(),
        new HardBreak(),
        new HorizontalRule(),
        new CodeView({
          codemirror,
          codemirrorOptions: {
            styleActiveLine: true,
            autoCloseTags: true,
          },
        }),
        new Fullscreen(),
        new History(),
      ],

      content: '<h2>Floating menu</h2><p>Just enter new line 🔥:</p>',
    };
  },
  components: {
    'el-tiptap': ElementTiptap,
  },
};
</script>
