<template>
  <editor-menu-bubble
    v-slot="editorContext"
    :editor="editor"
    :keep-in-bounds="false"
  >
    <div
      :class="{
        'el-tiptap-editor__menu-bubble--active':
          editorContext.menu.isActive && (showLinkMenu || showTextMenu),
      }"
      :style="`
        left: ${ editorContext.menu.left }px;
        bottom: ${ editorContext.menu.bottom + 10 }px;
      `"
      class="el-tiptap-editor__menu-bubble"
    >
      <link-bubble-menu
        v-if="showLinkMenu"
        :editorContext="editorContext"
      />

      <template v-else-if="showTextMenu">
        <component
          v-for="(spec, i) in generateCommandButtonComponentSpecs(editorContext)"
          :key="'command-button' + i"
          :is="spec.component"
          v-bind="spec.componentProps"
          v-on="spec.componentEvents"
        />
      </template>
    </div>
  </editor-menu-bubble>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TextSelection } from 'prosemirror-state';
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

  /* Only appears when link is selected separately */
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

  private get showTextMenu (): boolean {
    if (this.editor.state.selection instanceof TextSelection) {
      const extensionManager = this.editor.extensions;
      return extensionManager.extensions.some(extension => {
        return extension.options.bubble;
      });
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
