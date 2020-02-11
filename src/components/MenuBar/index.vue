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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Editor, EditorMenuBar, MenuData as TiptapMenuData } from 'tiptap';
import { MenuData } from '../../types';

@Component({
  components: {
    EditorMenuBar,
  },
})
export default class Menubar extends Vue {
  @Prop({
    type: Editor,
    required: true,
  })
  readonly editor!: Editor;

  private generateCommandButtonComponentSpecs <T = (MenuData | MenuData[])[]> (editorContext: TiptapMenuData): Array<T> {
    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.reduce <T[]>((acc, extension) => {
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
  }
}
</script>
