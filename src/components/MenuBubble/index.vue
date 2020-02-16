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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Editor, EditorMenuBubble, MenuData } from 'tiptap';
import { MenuBtnViewType } from '@/types';

@Component({
  components: {
    EditorMenuBubble,
  },
})
export default class MenuBubble extends Vue {
  @Prop({
    type: Editor,
    required: true,
  })
  readonly editor!: Editor;

  private generateCommandButtonComponentSpecs (editorContext: MenuData): MenuBtnViewType[] {
    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.reduce <MenuBtnViewType[]>((acc, extension) => {
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
  }
}
</script>
