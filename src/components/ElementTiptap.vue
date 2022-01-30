<template>
  <div
    v-if="editor"
    :class="[
      {
        'el-tiptap-editor': true,
      },
    ]"
  >
    <menu-bar
      :editor="editor"
      :class="[
        {
          'border-top-radius': true,
        },
      ]"
    />

    <editor-content
      :editor="editor"
      :class="[
        {
          'el-tiptap-editor__content': true,
          'border-bottom-radius': true,
        },
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { Trans } from '@/i18n';

import Bold from '../extensions/bold';
import Underline from '../extensions/underline';
import Italic from '../extensions/italic';
import Strike from '../extensions/strike';
import Heading from '../extensions/heading';
import TextAlign from '../extensions/text_align';
import Blockquote from '../extensions/blockquote';
import History from '../extensions/history';
import Link from '../extensions/link';
import ListItem from '../extensions/list_item';
import BulletList from '../extensions/bullet_list';
import OrderedList from '../extensions/ordered_list';
import Indent from '../extensions/indent';
import CodeBlock from '../extensions/code_block';
import HorizontalRule from '../extensions/horizontal_rule';
import TaskItem from '../extensions/task_item';
import TaskList from '../extensions/task_list';

import MenuBar from './MenuBar/index.vue';

export default defineComponent({
  components: {
    EditorContent,
    MenuBar,
  },
  props: {
    content: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'en',
    },
  },
  setup(props) {
    const editor = useEditor({
      content: props.content,
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        Underline,
        Italic,
        Strike,
        Heading,
        TextAlign,
        Blockquote,
        History,
        Link,
        ListItem,
        BulletList,
        OrderedList,
        Indent,
        CodeBlock,
        HorizontalRule,
        TaskItem,
        TaskList,
      ],
    });

    // i18n
    const i18nHandler = Trans.buildI18nHandler(props.lang);
    const t = (...args: any[]): string => {
      return i18nHandler.apply(Trans, args);
    };
    provide('t', t);

    return { editor };
  },
});
</script>

<style lang="scss">
@import '../styles/editor.scss';
@import '../styles/command_button.scss';
</style>
