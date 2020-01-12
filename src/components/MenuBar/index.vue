<template>
  <editor-menu-bar
    v-slot="editorContext"
    :editor="editor"
  >
    <slot v-bind="editorContext">
      <div class="el-tiptap-editor__menu-bar">
        <component
          v-for="(spec, i) in generateCommandButtonComponentSpecs(editorContext)"
          :key="'command-button' + i"
          :is="spec.component"
          v-bind="spec.componentProps"
          v-on="spec.componentEvents"
        />
      </div>
    </slot>
  </editor-menu-bar>
</template>

<script>
import { Editor, EditorMenuBar } from 'tiptap';

export default {
  name: 'Menubar',

  components: {
    EditorMenuBar,
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
