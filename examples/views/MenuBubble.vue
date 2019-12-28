<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      :content="content"
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
  Link,
  Image,
  Blockquote,
  CodeBlock,
  ListItem,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  TextAlign,
  Indent,
  HardBreak,
  LineHeight,
  HorizontalRule,
  TrailingNode,
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
        new Link({ bubble: true }),
        new Image(),
        new Blockquote({ bubble: true }),
        new CodeBlock({ bubble: true }),
        new TextAlign({ bubble: true }),
        new LineHeight({ bubble: true }),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Indent({ bubble: true }),
        new HardBreak(),
        new HorizontalRule(),
        new TrailingNode(),
        new History(),
      ],

      content: `
        <h1>Menu Bubble</h1>
        <p>Try to select some text here. There will popup a menu for some commands.</p>
        <p>All of available bubble menu commands are in this example for you.</p>
      `,
    };
  },
};
</script>

<style lang="scss" scoped>
.el-tiptap-editor {
  &__wrapper {
    width: 60vw;
  }
}
</style>
