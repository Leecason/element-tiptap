<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      :content="content"
      placeholder="Write something ..."
    />
  </div>
</template>

<script>
import {
  Doc,
  Text,
  Paragraph,
  Bold,
  Underline,
  Italic,
  Strike,
  Blockquote,
  Iframe,
  TrailingNode,
  History,
} from 'element-tiptap';

export default {
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
        new Blockquote(),
        new Iframe(),
        new TrailingNode(),
        new History(),
      ],

      content: `
        <p>
          Insert video with <b>iframe</b> extension.
        </p>
        <blockquote>
          <p>Videos are all <b>16:9</b> by default</p>
        </blockquote>
        <iframe src="https://www.youtube.com/embed/tADnCEpbPI8" frameborder="0" allowfullscreen></iframe>
      `,
    };
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
