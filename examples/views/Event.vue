<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      :content="content"
      :editor-properties="editorProperties"
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
/* eslint-disable no-console */
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
  Image,
  ListItem,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  TextAlign,
  Indent,
  History,
} from 'element-tiptap';

export default {
  data() {
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
        new Image(),
        new TextAlign(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Indent(),
        new History(),
      ],

      editorProperties: {
        editorProps: {
          // https://prosemirror.net/docs/ref/#view.EditorProps
          handleKeyDown() {
            console.log('🚀EditorProps: Keydown');
          },
          handleTextInput() {
            console.log('🚀EditorProps: TextInput');
          },
        },
      },

      content:
        '<p><img src="https://i.ibb.co/4pJs2Lx/undraw-static-assets-rpm6.png" width="300"></p><p>Open <strong>Console</strong>, your action on the editor will be logged.</p>',
    };
  },

  methods: {
    onInitEvent() {
      console.log('🔥init');
    },

    onTransactionEvent() {
      console.log('🔥transaction');
    },

    onFocusEvent() {
      console.log('🔥focus');
    },

    onBlurEvent() {
      console.log('🔥blur');
    },

    onPasteEvent() {
      console.log('🔥paste');
    },

    onDropEvent() {
      console.log('🔥drop');
    },

    onUpdateEvent() {
      console.log('🔥update');
    },
  },
};
</script>
