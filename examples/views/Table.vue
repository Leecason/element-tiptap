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
  TextColor,
  Bold,
  Underline,
  Italic,
  Strike,
  TextAlign,
  TrailingNode,
  Table,
  TableHeader,
  TableCell,
  TableRow,
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
        new Heading({ level: 3 }),
        new TextColor(),
        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),
        new TextAlign(),
        new TrailingNode(),
        new Table({
          resizable: true,
        }),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new FormatClear(),
        new History(),
      ],

      content: `
        <h2>
          Tables
        </h2>
        <p>
          Tables come with some useful commands like adding, removing or merging rows and columns. Navigate with <code>tab</code> or arrow keys. Resizing and <span style="color: #4caf50">TextColor</span> are also supported.
        </p>
        <table>
          <tr>
            <th colspan="3" data-colwidth="100, 0 ,0">Wide header</th>
          </tr>
          <tr>
            <td>One</td>
            <td>Two</td>
            <td>Three</td>
          </tr>
          <tr>
            <td>Four</td>
            <td>Five</td>
            <td>Six</td>
          </tr>
        </table>
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
