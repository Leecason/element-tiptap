<template>
  <div class="editor-output__container">
    <div class="editor">
      <el-tiptap
        :extensions="extensions"
        :placeholder="placeholder"
        @onUpdate="onUpdate"
      />
    </div>

    <div class="output">
      <div class="output__json">
        <h3>JSON</h3>
        <pre><code>{{ output.json || placeholder }}</code></pre>
      </div>

      <div class="output__html">
        <h3>HTML</h3>
        <pre><code>{{ output.html || placeholder }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import { ElTiptap } from 'el-tiptap';

const PLACEHOLDER = 'Write something to view output.';

export default {
  components: {
    ElTiptap,
  },

  data () {
    return {
      extensions: [
        'TextAlign',
        'Indent',
        'LineHeight',
        ['Heading', { level: 4 }],
        'Bold',
        'Underline',
        'Italic',
        'Strike',
        'Blockquote',
        'CodeBlock',
        'ListItem',
        'BulletList',
        'OrderedList',
        'TrailingNode',
        'History',
      ],

      output: {
        json: '',
        html: '',
      },

      placeholder: PLACEHOLDER,
    };
  },

  methods: {
    onUpdate (options) {
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
    width: 60vw;

    .editor {
      display: flex;
      flex: 1 0 0;
      margin-right: 50px;
      max-height: 100%;
    }

    .output {
      display: flex;
      flex: 1 0 0;
      flex-direction: column;

      &__json,
      &__html {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-bottom: 10px;
        overflow: hidden;
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
