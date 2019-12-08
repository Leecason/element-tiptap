<template>
  <editor-menu-bubble
    v-slot="editorContext"
    :editor="editor"
  >
    <slot v-bind="editorContext">
      <div
        :class="{
          'el-tiptap-editor__menu-bubble--active': editorContext.menu.isActive,
        }"
        :style="`
          left: ${editorContext.menu.left}px;
          bottom: ${editorContext.menu.bottom}px;
        `"
        class="el-tiptap-editor__menu-bubble"
      >
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
      </div>
    </slot>
  </editor-menu-bubble>
</template>

<script>
import { Editor, EditorMenuBubble } from 'tiptap';
import { isTextAlignActive } from '@/extensions/text_align';

import AddLinkCommandButton from '../MenuCommands/AddLinkCommandButton.vue';
import LineHeightDropdown from '../MenuCommands/LineHeightDropdown.vue';
import CommandButton from '../MenuCommands/CommandButton.vue';

export default {
  name: 'MenuBubble',

  components: {
    EditorMenuBubble,
    CommandButton,
    AddLinkCommandButton,
    LineHeightDropdown,
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
        return extension.name === name && extension.options.bubble;
      });

      return !!found;
    },
  },
};
</script>

<style lang="scss">
.el-tiptap-editor {
  $root: &;

  &__menu-bubble {
    border: 1px solid #EBEEF5;
    border-radius: 8px;
    display: flex;
    background-color: transparentize(#000, .3);
    padding: 5px;
    opacity: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity .3s, visibility .3s;
    visibility: hidden;
    z-index: 50;

    &--active {
      opacity: 1;
      visibility: visible;
    }

    #{$root}__command-button {
      color: #fff;

      &:hover {
        background-color: #ecf5ff;
        border-color: transparent;
        color: #409EFF;
      }

      &--active {
        background-color: #ecf5ff;
        border-color: #b3d8ff;
        color: #409EFF;
      }
    }
  }
}
</style>
