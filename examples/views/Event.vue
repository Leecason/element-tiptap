<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      :content="content"
      placeholder="Write something ..."
      @onInit="onInitEvent"
      @onTransaction="onTransactionEvent"
      @onFocus="onFocusEvent"
      @onBlur="onBlurEvent"
      @onPaste="onPasteEvent"
      @onDrop="onDropEvent"
      @onUpdate="onUpdateEvent"
    />
  </div>
</template>

<script>
import {
  ElTiptap,

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
  TodoItem,
  TodoList,
  TextAlign,
  Indent,
  History,
} from 'el-tiptap';

export default {
  components: {
    ElTiptap,
  },

  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),
        new Blockquote(),
        new CodeBlock(),
        new TextAlign(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Indent(),
        new History(),
      ],

      content: `
        <h1>You can view editor Events in Console</h1>
        <p><strong>Events: </strong></p>
        <p data-indent="1"><strong>Init、 Transaction、 Focus、 Blur、 Paste、 Drop、 Update</strong></p>
      `,
    };
  },

  methods: {
    onInitEvent ({ editor }) {
      console.log('init', editor);
    },

    onTransactionEvent ({ editor }) {
      console.log('transaction', editor);
    },

    onFocusEvent ({ editor }) {
      console.log('focus', editor);
    },

    onBlurEvent ({ editor }) {
      console.log('blur', editor);
    },

    onPasteEvent ({ editor }) {
      console.log('paste', editor);
    },

    onDropEvent ({ editor }) {
      console.log('drop', editor);
    },

    onUpdateEvent (output) {
      console.log('update', output);
    },
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
