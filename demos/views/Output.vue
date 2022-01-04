<template>
  <div class="editor-output__container">
    <div class="editor">
      <el-tiptap
        :extensions="extensions"
        :content="content"
        @onUpdate="onUpdate"
      />
    </div>

    <div class="section">
      <h2 class="section__title">HTML</h2>
      <pre><code>{{ output.html }}</code></pre>
    </div>

    <div class="section">
      <h2 class="section__title">JSON</h2>
      <pre><code>{{ output.json }}</code></pre>
    </div>
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
  Blockquote,
  Code,
  CodeBlock,
  ListItem,
  BulletList,
  OrderedList,
  TextAlign,
  Indent,
  LineHeight,
  TrailingNode,
  History,
} from 'element-tiptap';

export default {
  data() {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 3 }),
        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),
        new Blockquote(),
        new Code(),
        new CodeBlock(),
        new TextAlign(),
        new LineHeight(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new Indent(),
        new TrailingNode(),
        new History(),
      ],

      content:
        '<p>The <code>output</code> prop: <strong>HTML or JSON</strong></p>',

      output: {
        json: 'Update content to see changes',
        html: 'Update content to see changes',
      },
    };
  },

  methods: {
    onUpdate(output, options) {
      const { getJSON, getHTML } = options;

      this.output.json = getJSON();
      this.output.html = getHTML();
    },
  },
};
</script>

<style lang="scss" scoped>
.editor-output {
  &__container {
    display: flex;
    flex-direction: column;
    width: 60vw;

    .section {
      margin-top: 50px;

      &__title {
        border-bottom: 1px solid #000;
        color: #000;
        margin-bottom: 10px;
      }

      pre {
        background-color: #303133;
        border-radius: 5px;
        color: #d9ecff;
        font-size: 16px;
        font-weight: 500;
        overflow: auto;
        padding: 20px;

        code {
          display: block;
          font-family: 'Menlo,Monaco,Consolas,Courier,monospace';
          white-space: pre-wrap;
        }
      }
    }
  }
}
</style>
