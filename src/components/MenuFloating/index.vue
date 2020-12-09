<template>
  <editor-floating-menu
    v-slot="editorContext"
    v-bind="menuFloatingOptions"
    :editor="editor"
  >
    <div
      :class="{
        'el-tiptap-editor__menu-floating--active':
          editorContext.menu.isActive && floatingMenuEnable,
      }"
      :style="`
        top: ${ editorContext.menu.top }px;
      `"
      class="el-tiptap-editor__menu-floating"
    >
      <template>
        <component
          v-for="(spec, i) in generateCommandButtonComponentSpecs(editorContext)"
          :key="'command-button' + i"
          :is="spec.component"
          :enable-tooltip="et.tooltip"
          v-bind="spec.componentProps"
          v-on="spec.componentEvents"
        />
      </template>
    </div>
  </editor-floating-menu>
</template>

<script lang="ts">
import Icon from 'vue-awesome/components/Icon.vue';
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { Editor, EditorFloatingMenu, MenuData } from 'tiptap';
import { MenuBtnViewType } from '@/../types';

@Component({
  components: {
    'v-icon': Icon,
    EditorFloatingMenu
  },
})
export default class MenuFloating extends Vue {
  @Prop({
    type: Editor,
    required: true,
  })
  readonly editor!: Editor;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  readonly menuFloatingOptions!: Object;

  @Inject() readonly et!: any;

  private get floatingMenuEnable (): boolean {
    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.some(extension => {
      return extension.options.floating;
    });
  }

  private generateCommandButtonComponentSpecs (editorContext: MenuData): MenuBtnViewType[] {
    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.reduce <MenuBtnViewType[]>((acc, extension) => {
      if (!extension.options.floating) return acc;
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
