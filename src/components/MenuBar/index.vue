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
        tooltip="Bold"
        icon="bold"
      />

      <command-button
        :is-active="editorContext.isActive.underline()"
        :command="editorContext.commands.underline"
        tooltip="Underline"
        icon="underline"
      />

      <command-button
        :is-active="editorContext.isActive.italic()"
        :command="editorContext.commands.italic"
        tooltip="Italic"
        icon="italic"
      />

      <command-button
        :is-active="editorContext.isActive.strike()"
        :command="editorContext.commands.strike"
        tooltip="Strike through"
        icon="strikethrough"
      />

      <command-button
        :is-active="editorContext.isActive.link()"
        :command="openApplyLinkControl"
        tooltip="Apply link"
        icon="link"
      />

      <command-button
        :is-active="editorContext.isActive.code_block()"
        :command="editorContext.commands.code_block"
        tooltip="Code block"
        icon="code"
      />

      <command-button
        :is-active="editorContext.isActive.blockquote()"
        :command="editorContext.commands.blockquote"
        tooltip="Block quote"
        icon="quote-right"
      />

      <command-button
        :command="editorContext.commands.align_left"
        tooltip="Align left"
        icon="align-left"
      />

      <command-button
        :is-active="isTextAlignActive('center')"
        :command="editorContext.commands.align_center"
        tooltip="Align center"
        icon="align-center"
      />

      <command-button
        :is-active="isTextAlignActive('right')"
        :command="editorContext.commands.align_right"
        tooltip="Align right"
        icon="align-right"
      />

      <command-button
        :is-active="isTextAlignActive('justify')"
        :command="editorContext.commands.align_justify"
        tooltip="Align justify"
        icon="align-justify"
      />

      <command-button
        :is-active="editorContext.isActive.bullet_list()"
        :command="editorContext.commands.bullet_list"
        tooltip="Bullet list"
        icon="list-ul"
      />

      <command-button
        :is-active="editorContext.isActive.ordered_list()"
        :command="editorContext.commands.ordered_list"
        tooltip="Ordered list"
        icon="list-ol"
      />

      <command-button
        :command="editorContext.commands.indent"
        tooltip="Indent"
        icon="indent"
      />

      <command-button
        :command="editorContext.commands.outdent"
        tooltip="Outdent"
        icon="outdent"
      />

      <command-button
        :command="editorContext.commands.horizontal_rule"
        tooltip="Horizontal line"
        icon="minus"
      />

      <command-button
        :is-active="editorContext.isActive.paragraph()"
        :command="editorContext.commands.paragraph"
        tooltip="Paragraph"
        icon="paragraph"
      />

      <command-button
        :command="editorContext.commands.undo"
        tooltip="Undo"
        icon="undo"
      />

      <command-button
        :command="editorContext.commands.redo"
        tooltip="Redo"
        icon="redo"
      />
    </div>
  </editor-menu-bar>
</template>

<script>
import { Editor, EditorMenuBar } from 'tiptap';
import { isTextAlignActive } from '@/extensions/text_align';

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

  methods: {
    isTextAlignActive (align) {
      return isTextAlignActive(this.editor.state, align);
    },

    openApplyLinkControl () {
      this.$prompt('', 'Apply link', {
        confirmButtonText: 'Apply',
        cancelButtonText: 'Close',
        inputPlaceholder: 'Href',
        roundButton: true,
      }).then(({ value: href }) => {
        this.editor.commands.link({ href });
      }).catch(() => {
        this.editor.focus();
      });
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
    flex-wrap: wrap;
    padding: 5px;
  }
}
</style>
