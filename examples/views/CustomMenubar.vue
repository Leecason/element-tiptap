<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap :extensions="extensions" :content="content1">
      <template #menubar="{ commands, isActive }">
        <div class="menubar">
          <el-button
            :type="isActive.bold() ? 'primary' : ''"
            @click="commands.bold"
          >
            Bold
          </el-button>

          <el-button
            :type="isActive.underline() ? 'primary' : ''"
            @click="commands.underline"
          >
            Underline
          </el-button>
        </div>
      </template>
    </el-tiptap>

    <el-tiptap :extensions="extensions" :content="content2" />
  </div>
</template>

<script>
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  Link,
  Image,
  Blockquote,
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
        new History(),
        new ListItem(),
        new OrderedList(),
        new Heading({ level: 3 }),
        new Bold(),
        new Underline(),
        new Strike(),
        new BulletList(),
        new Italic(),
        new Link(),
        new Indent(),
        new Image(),
        new Blockquote(),
        new TextAlign(),
        new TodoItem(),
        new TodoList(),
      ],

      content1:
        '<p>You can customize the menubar (also bubble menu) with your design.</p>',
      content2:
        '<p>The order in which you specify the extensions affects the order of the buttons.',
    };
  },
};
</script>

<style lang="scss" scoped>
.el-tiptap-editor {
  .menubar {
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid #b3d8ff;
    background: linear-gradient(to right, #b2fefa, #0ed2f7);
    padding: 5px 10px;
  }
}
</style>
