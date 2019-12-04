<template>
  <editor-menu-bar
    v-slot="editorContext"
    :editor="editor"
  >
    <div class="el-tiptap-editor__menu-bar">
      <heading-dropdown
        v-if="extensionAvailable('heading')"
        :editorContext="editorContext"
      />

      <command-button
        v-if="extensionAvailable('bold')"
        :is-active="editorContext.isActive.bold()"
        :command="editorContext.commands.bold"
        tooltip="Bold"
        icon="bold"
      />

      <command-button
        v-if="extensionAvailable('underline')"
        :is-active="editorContext.isActive.underline()"
        :command="editorContext.commands.underline"
        tooltip="Underline"
        icon="underline"
      />

      <command-button
        v-if="extensionAvailable('italic')"
        :is-active="editorContext.isActive.italic()"
        :command="editorContext.commands.italic"
        tooltip="Italic"
        icon="italic"
      />

      <command-button
        v-if="extensionAvailable('strike')"
        :is-active="editorContext.isActive.strike()"
        :command="editorContext.commands.strike"
        tooltip="Strike through"
        icon="strikethrough"
      />

      <add-link-command-button
        v-if="extensionAvailable('link')"
        :editorContext="editorContext"
      />

      <image-upload-command-button
        v-if="extensionAvailable('image')"
        :editorContext="editorContext"
      />

      <command-button
        v-if="extensionAvailable('code_block')"
        :is-active="editorContext.isActive.code_block()"
        :command="editorContext.commands.code_block"
        tooltip="Code block"
        icon="code"
      />

      <command-button
        v-if="extensionAvailable('blockquote')"
        :is-active="editorContext.isActive.blockquote()"
        :command="editorContext.commands.blockquote"
        tooltip="Block quote"
        icon="quote-right"
      />

      <command-button
        v-if="extensionAvailable('text_align')"
        :command="editorContext.commands.align_left"
        tooltip="Align left"
        icon="align-left"
      />

      <command-button
        v-if="extensionAvailable('text_align')"
        :is-active="isTextAlignActive('center')"
        :command="editorContext.commands.align_center"
        tooltip="Align center"
        icon="align-center"
      />

      <command-button
        v-if="extensionAvailable('text_align')"
        :is-active="isTextAlignActive('right')"
        :command="editorContext.commands.align_right"
        tooltip="Align right"
        icon="align-right"
      />

      <command-button
        v-if="extensionAvailable('text_align')"
        :is-active="isTextAlignActive('justify')"
        :command="editorContext.commands.align_justify"
        tooltip="Align justify"
        icon="align-justify"
      />

      <line-height-dropdown
        v-if="extensionAvailable('line_height')"
        :editorContext="editorContext"
      />

      <command-button
        v-if="extensionAvailable('bullet_list')"
        :is-active="editorContext.isActive.bullet_list()"
        :command="editorContext.commands.bullet_list"
        tooltip="Bullet list"
        icon="list-ul"
      />

      <command-button
        v-if="extensionAvailable('ordered_list')"
        :is-active="editorContext.isActive.ordered_list()"
        :command="editorContext.commands.ordered_list"
        tooltip="Ordered list"
        icon="list-ol"
      />

      <command-button
        v-if="extensionAvailable('todo_list')"
        :is-active="editorContext.isActive.todo_list()"
        :command="editorContext.commands.todo_list"
        tooltip="Todo list"
        icon="check-square"
      />

      <command-button
        v-if="extensionAvailable('indent')"
        :command="editorContext.commands.indent"
        tooltip="Indent"
        icon="indent"
      />

      <command-button
        v-if="extensionAvailable('indent')"
        :command="editorContext.commands.outdent"
        tooltip="Outdent"
        icon="outdent"
      />

      <command-button
        v-if="extensionAvailable('horizontal_rule')"
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
        v-if="extensionAvailable('history')"
        :command="editorContext.commands.undo"
        tooltip="Undo"
        icon="undo"
      />

      <command-button
        v-if="extensionAvailable('history')"
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
import AddLinkCommandButton from './AddLinkCommandButton.vue';
import LineHeightDropdown from './LineHeightDropdown.vue';
import ImageUploadCommandButton from './ImageUploadCommandButton.vue';
import CommandButton from './CommandButton.vue';

export default {
  name: 'Menubar',

  components: {
    EditorMenuBar,
    HeadingDropdown,
    AddLinkCommandButton,
    LineHeightDropdown,
    ImageUploadCommandButton,
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

    extensionAvailable (name) {
      const extensionManager = this.editor.extensions;
      const found = extensionManager.extensions.find(extension => {
        return extension.name === name;
      });

      return !!found;
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

.el-dropdown-menu__item {
  line-height: 1.5;
  padding-top: 5px;
  padding-bottom: 5px;

  &--active {
    background-color: #ecf5ff;
    color: #409EFF;
  }
}
</style>
