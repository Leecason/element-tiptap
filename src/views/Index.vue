<template>
  <div class="index">
    <el-tiptap :extensions="extensions" />
  </div>
</template>

<script>
import {
  Doc,
  Text,
  Paragraph,
} from 'tiptap';

import {
  Bold,
  Underline,
  Italic,
  Strike,

  History,
} from 'tiptap-extensions';

import ElTiptap from '../components/ElTiptap';

export default {
  name: 'index',

  components: {
    ElTiptap,
  },

  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),

        new Bold(),
        new Underline(),
        new Italic(),
        new Strike(),

        new History(),
      ],
    };
  },
};
</script>
