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
        <component
          v-for="(spec, i) in generateCommandButtonComponentSpecs(editorContext)"
          :key="'command-button' + i"
          :is="spec.component"
          v-bind="spec.componentProps"
        />
      </div>
    </slot>
  </editor-menu-bubble>
</template>

<script>
import { Editor, EditorMenuBubble } from 'tiptap';

export default {
  name: 'MenuBubble',

  components: {
    EditorMenuBubble,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  methods: {
    generateCommandButtonComponentSpecs (editorContext) {
      const extensionManager = this.editor.extensions;
      return extensionManager.extensions.reduce((acc, extension) => {
        if (!extension.options.bubble) return acc;
        if (typeof extension.menuBtnView !== 'function') return acc;

        const menuBtnComponentSpec = extension.menuBtnView({
          ...editorContext,
          editor: this.editor,
        });
        if (Array.isArray(menuBtnComponentSpec)) {
          return [
            ...acc,
            ...menuBtnComponentSpec,
          ];
        }

        return [
          ...acc,
          menuBtnComponentSpec,
        ];
      }, []);
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
