<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      :content="content"
      placeholder="Write something ..."
      @onCreate="onCreateEvent"
      @onFocus="onFocusEvent"
      @onBlur="onBlurEvent"
      @onUpdate="onUpdateEvent"
    />
  </div>
</template>

<script>
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
  CodeBlock,
  Image,
  BulletList,
  OrderedList,
  TaskList,
  TextAlign,
  Indent,
  History,
} from 'element-tiptap';

import { ElNotification } from 'element-plus';

export default {
  data() {
    return {
      extensions: [
        Document,
        Text,
        Paragraph,
        Heading.configure({ level: 5 }),
        Bold,
        Underline,
        Italic,
        Strike,
        Blockquote,
        CodeBlock,
        Image,
        TextAlign,
        BulletList,
        OrderedList,
        TaskList,
        Indent,
        History,
      ],

      content:
        '<p><img src="https://i.ibb.co/4pJs2Lx/undraw-static-assets-rpm6.png" width="300"></p><p>Open <strong>Console</strong>, your action on the editor will be logged.</p>',
    };
  },

  methods: {
    onCreateEvent() {
      ElNotification.info({
        title: 'Editor Event',
        message: '🔥create',
      });
    },

    onFocusEvent() {
      ElNotification.info({
        title: 'Editor Event',
        message: '🔥focus',
      });
    },

    onBlurEvent() {
      ElNotification.info({
        title: 'Editor Event',
        message: '🔥blur',
      });
    },

    onUpdateEvent() {
      ElNotification.info({
        title: 'Editor Event',
        message: '🔥update',
      });
    },
  },
};
</script>
