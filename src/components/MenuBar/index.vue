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
          :enable-tooltip="et.tooltip"
          v-bind="spec.componentProps"
          :readonly="et.isCodeViewMode"
          v-on="spec.componentEvents"
        />
      </div>
    </slot>
  </editor-menu-bar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { Editor, EditorMenuBar, MenuData } from 'tiptap';
import { MenuBtnViewType } from '@/../types';

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

  @Inject() readonly et!: any;

  private generateCommandButtonComponentSpecs(editorContext: MenuData): MenuBtnViewType[] {
    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.reduce <MenuBtnViewType[]>((acc, extension) => {
      if (extension.options.menubar === false) return acc;
      if (typeof extension.menuBtnView !== 'function') return acc;

      const menuBtnComponentSpec = extension.menuBtnView({
        ...editorContext,
        editor: this.editor,
        t: this.et.t, // i18n
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
