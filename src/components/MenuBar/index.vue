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

<style lang="scss">
.el-tiptap-editor {
  &__menu-bar {
    background-color: #F5F7FA;
    border-bottom: 1px solid #EBEEF5;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
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
