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
