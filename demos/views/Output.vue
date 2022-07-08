<template>
  <div class="editor-output__container">
    <div class="editor">
      <el-tiptap
        :extensions="extensions"
        :v-model:content="content"
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

<script setup>
import { ref } from 'vue';
import {
  Document,
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
  BulletList,
  OrderedList,
  TextAlign,
  Indent,
  LineHeight,
  History,
} from 'element-tiptap';

const extensions = [
  Document,
  Text,
  Paragraph,
  Heading.configure({ level: 3 }),
  Bold,
  Underline,
  Italic,
  Strike,
  Blockquote,
  Code,
  CodeBlock,
  TextAlign,
  LineHeight,
  BulletList,
  OrderedList,
  Indent,
  History,
];

const content = ref(
  '<p>The <code>output</code> prop: <strong>HTML or JSON</strong></p>'
);

const output = ref({
  json: 'Update content to see changes',
  html: 'Update content to see changes',
});

const onUpdate = (output, editor) => {
  this.output.value.json = editor.getJSON();
  this.output.value.html = editor.getHTML();
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
