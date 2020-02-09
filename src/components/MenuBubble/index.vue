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
import { Editor, EditorMenuBubble, MenuData as TiptapMenuData } from 'tiptap';
import { MenuData } from '../../types/element-tiptap';

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
  editor!: Editor;

  generateCommandButtonComponentSpecs <T = (MenuData | MenuData)[]> (editorContext: TiptapMenuData): Array<T> {
    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.reduce <T[]>((acc, extension) => {
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
