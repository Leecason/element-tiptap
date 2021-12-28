<template>
  <div
    :class="[
      {
        'el-tiptap-editor': true,
      },
    ]"
  >
    <editor-content
      :editor="editor"
      :class="[
        {
          'el-tiptap-editor__content': true,
        },
      ]"
    />
  </div>
</template>

<script lang="ts">
// must need
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import Bold from '@tiptap/extension-bold';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    EditorContent,
  },

  props: {
    content: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    editable: {
      type: Boolean,
      default: false,
    },
  },

  setup({ content, editable }) {
    const editor = useEditor({
      content: 'first editor',
      editable: editable,
      extensions: [Document, Paragraph, Text, Bold],
    });

    return { editor };
  },
});
</script>

<style lang="scss">
@import '../styles/editor.scss';
</style>
