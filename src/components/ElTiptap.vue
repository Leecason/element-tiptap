<template>
  <div
    v-if="editor"
    class="el-tiptap-editor"
  >
    <toolbar
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

import Toolbar from './Toolbar.vue';

export default {
  name: 'ElTiptap',

  components: {
    Toolbar,
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
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}
</style>
