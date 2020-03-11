<template>
  <editor-menu-bubble
    v-slot="editorContext"
    :editor="editor"
  >
    <div
      :class="{
        'el-tiptap-editor__menu-bubble--active': editorContext.menu.isActive,
      }"
      :style="`
        left: ${ editorContext.menu.left }px;
        bottom: ${ editorContext.menu.bottom }px;
      `"
      class="el-tiptap-editor__menu-bubble"
    >
      <template v-if="showLinkMenu">
        <link-bubble-menu
          :editor="editor"
          :editorContext="editorContext"
        />
      </template>

      <template v-else>
        <component
          v-for="(spec, i) in generateCommandButtonComponentSpecs(editorContext)"
          :key="'command-button' + i"
          :is="spec.component"
          v-bind="spec.componentProps"
        />
      </template>
    </div>
  </editor-menu-bubble>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Editor, EditorMenuBubble, MenuData } from 'tiptap';
// @ts-ignore
import { getMarkRange } from 'tiptap-utils';
import { MenuBtnViewType } from '@/../types';

import LinkBubbleMenu from './LinkBubbleMenu.vue';

@Component({
  components: {
    EditorMenuBubble,
    LinkBubbleMenu,
  },
})
export default class MenuBubble extends Vue {
  @Prop({
    type: Editor,
    required: true,
  })
  readonly editor!: Editor;

  private get showLinkMenu (): boolean {
    const { state, schema } = this.editor;

    if (schema.marks.link) {
      const { tr } = state;
      const { selection } = tr;

      if (!selection) return false;

      const { $from, $to } = selection;
      const range = getMarkRange($from, schema.marks.link);
      if (!range) return false;

      return range.to === $to.pos;
    }
    return false;
  }

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
