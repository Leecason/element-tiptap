<template>
  <editor-content :editor="editor" />
</template>

<script>
// must need
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import Bold from '@tiptap/extension-bold';
import { EditorContent, useEditor } from '@tiptap/vue-3';

export default {
  components: {
    EditorContent,
  },

  props: {
    content: {
      type: String,
      default: '',
    },
  },

  setup({ content }, props) {
    console.log(props);

    const editor = useEditor({
      content,
      extensions: [
        Document.configure(),
        Paragraph.configure(),
        Text.configure(),
        Bold.configure(),
      ],
    });

    return { editor };
  },
};
</script>
