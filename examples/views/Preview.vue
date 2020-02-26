<template>
  <div class="editor-output__container">
    <div class="editor">
      <el-tiptap
        :extensions="extensions"
        v-model="output.html"
        @onUpdate="onUpdate"
      />
    </div>

    <div class="preview section">
      <h2 class="section__title">Preview</h2>
      <div class="el-tiptap-editor__content" v-html="output.html"></div>
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
  data () {
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

      output: {
        json: {
          type: 'doc',
          content: [
            {
              type: 'heading',
              attrs: {
                textAlign: null,
                indent: 0,
                lineHeight: null,
                level: 2
              },
              content: [
                {
                  type: 'text',
                  text: 'Preview'
                }
              ]
            },
            {
              type: 'paragraph',
              attrs: {
                textAlign: null,
                indent: 0,
                lineHeight: null
              },
              content: [
                {
                  type: 'text',
                  marks: [
                    {
                      type: 'bold'
                    }
                  ],
                  text: 'This is a Test Text. '
                },
                {
                  type: 'text',
                  text: 'You can input to see the output...'
                }
              ]
            }
          ]
        },
        html: '<h2>Test Text</h2><p>You can input to see the output...</p>',
      },
    };
  },

  methods: {
    onUpdate (output, options) {
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
        border-bottom: 1px solid #fff;
        color: #fff;
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
