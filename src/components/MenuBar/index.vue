<template>
  <editor-menu-bar
    v-slot="editorContext"
    :editor="editor"
  >
    <div class="el-tiptap-editor__menu-bar">
      <heading-dropdown
        :editorContext="editorContext"
      />

      <command-button
        :is-active="editorContext.isActive.bold()"
        :command="editorContext.commands.bold"
        tooltip="bold"
        icon="bold"
      />

      <command-button
        :is-active="editorContext.isActive.underline()"
        :command="editorContext.commands.underline"
        tooltip="underline"
        icon="underline"
      />

      <command-button
        :is-active="editorContext.isActive.italic()"
        :command="editorContext.commands.italic"
        tooltip="italic"
        icon="italic"
      />

      <command-button
        :is-active="editorContext.isActive.strike()"
        :command="editorContext.commands.strike"
        tooltip="strike"
        icon="strikethrough"
      />

      <command-button
        :command="editorContext.commands.undo"
        tooltip="undo"
        icon="undo"
      />

      <command-button
        :command="editorContext.commands.redo"
        tooltip="redo"
        icon="redo"
      />
    </div>
  </editor-menu-bar>
</template>

<script>
import { Editor, EditorMenuBar } from 'tiptap';
import HeadingDropdown from './HeadingDropdown.vue';
import CommandButton from './CommandButton.vue';

export default {
  name: 'Toolbar',

  components: {
    EditorMenuBar,
    HeadingDropdown,
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  provide () {
    return {
      editor: this.editor,
    };
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
