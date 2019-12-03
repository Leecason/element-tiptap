<template>
  <div
    v-if="editor"
    class="el-tiptap-editor"
  >
    <menu-bar
      :editor="editor"
    />

    <editor-content
      :editor="editor"
      class="el-tiptap-editor__content"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap';

import MenuBar from './MenuBar/index.vue';

export default {
  name: 'ElTiptap',

  components: {
    MenuBar,
    EditorContent,
  },

  props: {
    extensions: {
      type: Array,
      default: () => [],
    },
  },

  data () {
    return {
      editor: null,
    };
  },

  mounted () {
    this.editor = new Editor({
      useBuiltInExtensions: false,
      extensions: this.extensions,
    });
  },
};
</script>

<style lang="scss">
.el-tiptap-editor {
  border: 1px solid #EBEEF5;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  display: flex;
  flex-direction: column;

  &__content {
    background-color: #fff;
    flex-grow: 1;
    padding: 5px;
  }

  .ProseMirror {
    margin: 20px;
    outline: 0;

    p {
      line-height: 1.5;
      margin-top: 16px;
      margin-bottom: 16px;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    ul,
    ol {
      counter-reset: none;
      list-style-type: none;
      margin-left: 24px;
    }

    li > p {
      &::before {
        content: counter(el-tiptap-counter) '.';
        display: inline-block;
        line-height: 1.5;
        position: relative;
        text-align: right;
        top: 0;
        left: -5px;
        margin-left: -24px;
        width: 24px;
      }
    }

    ul li > p {
      &::before {
        content: '\2022';
      }
    }

    ol {
      counter-reset: el-tiptap-counter;

      li > p::before {
        counter-increment: el-tiptap-counter;
      }
    }

    blockquote {
      border-left: 5px solid #edf2fc;
      border-radius: 2px;
      color: #606266;
      line-height: 1.5;
      margin: 20px 0;
      padding-left: 1em;
    }

    hr {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    *[data-text-align=right] {
      text-align: right!important;
    }

    *[data-text-align=center] {
      text-align: center!important;
    }

    *[data-text-align=justify] {
      text-align: justify!important;
    }
  }
}
</style>
