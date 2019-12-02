<template>
  <editor-menu-bar
    v-slot="{ commands, isActive }"
    :editor="editor"
  >
    <div class="el-tiptap-editor__menu-bar">
      <command-button
        :isActive="isActive.bold()"
        :command="commands.bold"
        tooltip="bold"
        icon="bold"
      />

      <command-button
        :isActive="isActive.underline()"
        :command="commands.underline"
        tooltip="underline"
        icon="underline"
      />

      <command-button
        :isActive="isActive.italic()"
        :command="commands.italic"
        tooltip="italic"
        icon="italic"
      />

      <command-button
        :isActive="isActive.strike()"
        :command="commands.strike"
        tooltip="strike"
        icon="strikethrough"
      />

      <command-button
        :command="commands.undo"
        tooltip="undo"
        icon="undo"
      />

      <command-button
        :command="commands.redo"
        tooltip="redo"
        icon="redo"
      />
    </div>
  </editor-menu-bar>
</template>

<script>
import { Editor, EditorMenuBar } from 'tiptap';
import CommandButton from './CommandButton.vue';

export default {
  name: 'Toolbar',

  components: {
    EditorMenuBar,
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.el-tiptap-editor {
  &__menu-bar {
    background-color: #F5F7FA;
    border-bottom: 1px solid #EBEEF5;
    display: flex;
    padding: 5px;
  }
}
</style>
