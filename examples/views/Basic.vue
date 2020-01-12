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
  TextColor,
  Indent,
  LineHeight,
  HardBreak,
  HorizontalRule,
  TrailingNode,
  FormatClear,
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
        new TextColor(),
        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),
        new Link(),
        new Image(),
        new Blockquote(),
        new CodeBlock(),
        new TextAlign(),
        new LineHeight(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Indent(),
        new HardBreak(),
        new HorizontalRule(),
        new TrailingNode(),
        new FormatClear(),
        new History(),
      ],

      content: `
        <h1 data-text-align="center">Element Tiptap Editor</h1>
        <p data-text-align="center">
          <strong>
            The editor is based on&nbsp;
            <a href="https://github.com/scrumpy/tiptap" rel="noopener noreferrer nofollow">Tiptap</a>&nbsp;
            and uses&nbsp;
            <a href="https://github.com/ElemeFE/element" rel="noopener noreferrer nofollow">Element's</a>&nbsp;
            components.&nbsp;
          </strong>
        </p>
        <p>
          Text can be decorated with <strong>Bold</strong>, <u>Underline</u>, <em>Italic</em>, <s>Strikethrough</s> or <strong><u><em><s>both</s></em></u></strong>. <strong><span style="color: #f44336">Text </span><span style="color: #673ab7">color </span><span style="color: #2196f3">is </span><span style="color: #4caf50">also </span><span style="color: #ffc107">supported. </span></strong></p>
          <p data-text-align="right">
            Align text to right.
          </p>
        <ul>
          <li>
            <p>A regular list</p>
          </li>
          <li>
            <p>With regular items</p>
          </li>
        </ul>
        <p>
          Image:
        </p>
        <p data-text-align="center">
          <img src="http://lifestyle.etnet.com.hk/column/images/stories/195/2014/03/0314why.jpg" height="200">
        </p>
        <ul data-type="todo_list">
          <li data-type="todo_item" data-done="false">
            <span class="todo-checkbox" contenteditable="false"></span>
            <div class="todo-content">
              <p>
                something to do
              </p>
            </div>
          </li>
          <li data-type="todo_item" data-done="true">
            <span class="todo-checkbox" contenteditable="false"></span>
            <div class="todo-content">
              <p>
                something has done
              </p>
            </div>
          </li>
        </ul>
        <pre><code>Hello World!</code></pre>
        <p>
          You can also use keyboard shortcuts for
          <strong>Undo</strong>
          or
          <strong>Redo</strong> your changes.
          (<strong>cmd+z</strong> and <strong>cmd+shift+z</strong>).
        </p>
        <blockquote>
          <p>
            This editor is awesome. 👍👍🏻👍🏼👍🏽👍🏾👍🏿
          </p>
        </blockquote>
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
