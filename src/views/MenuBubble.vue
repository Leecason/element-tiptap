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
import ElTiptap from '../components/ElTiptap';

export default {
  components: {
    ElTiptap,
  },

  data () {
    return {
      extensions: [
        ['TextAlign', { bubble: true }],
        ['Indent', { bubble: true }],
        ['LineHeight', { bubble: true }],

        ['Heading', { level: 5 }],

        ['Bold', { bubble: true }],
        ['Underline', { bubble: true }],
        ['Italic', { bubble: true }],
        ['Strike', { bubble: true }],
        ['Link', { bubble: true }],
        'Image',

        ['Blockquote', { bubble: true }],
        ['CodeBlock', { bubble: true }],

        'ListItem',
        'BulletList',
        'OrderedList',
        'TodoItem',
        'TodoList',

        'HorizontalRule',
        'TrailingNode',

        'History',
      ],

      content: `
        <h1>Menu Bubble</h1>
        <p>Try to select some text here. There will popup a menu for some commands.</p>
        <p>All of available bubble menu commands are in this example for you.</p>
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
