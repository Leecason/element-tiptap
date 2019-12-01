<template>
  <div class="el-tiptap-editor">
    <editor-content
      :editor="editor"
      class="el-tiptap-editor__content"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap';

export default {
  name: 'ElTiptap',

  components: {
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
      injectCSS: false,
    });
  },
};
</script>
