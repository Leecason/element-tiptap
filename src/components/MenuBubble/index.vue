<template>
  <editor-menu-bubble
    v-slot="editorContext"
    v-bind="menuBubbleOptions"
    :editor="editor"
  >
    <div
      :class="{
        'el-tiptap-editor__menu-bubble--active':
          editorContext.menu.isActive && bubbleMenuEnable,
      }"
      :style="`
        left: ${ editorContext.menu.left }px;
        bottom: ${ editorContext.menu.bottom + 10 }px;
      `"
      class="el-tiptap-editor__menu-bubble"
    >
      <link-bubble-menu
        v-if="activeMenu === 'link'"
        :editorContext="{ ...editorContext, editor }"
      >
        <template #prepend>
          <div
            v-if="textMenuEnable"
            class="el-tiptap-editor__command-button"
            @mousedown.prevent
            @click="linkBack"
          >
            <v-icon name="arrow-left" />
          </div>
        </template>
      </link-bubble-menu>

      <template v-else-if="activeMenu === 'default'">
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
  </editor-menu-bubble>
</template>

<script lang="ts">
import Icon from 'vue-awesome/components/Icon.vue';
import { Component, Prop, Vue, Inject, Watch } from 'vue-property-decorator';
import { Editor, EditorMenuBubble, MenuData } from 'tiptap';
// @ts-ignore
import { getMarkRange } from 'tiptap-utils';
import { TextSelection, AllSelection, Selection } from 'prosemirror-state';
import { MenuBtnViewType } from '@/../types';

import LinkBubbleMenu from './LinkBubbleMenu.vue';

const enum MenuType {
  NONE = 'none',
  DEFAULT = 'default',
  LINK = 'link',
};

@Component({
  components: {
    'v-icon': Icon,
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

  @Prop({
    type: Object,
    default: () => ({}),
  })
  readonly menuBubbleOptions!: Object;

  @Inject() readonly et!: any;

  activeMenu: MenuType = MenuType.NONE;
  isLinkBack: boolean = false;

  private get bubbleMenuEnable(): boolean {
    return this.linkMenuEnable || this.textMenuEnable;
  }

  private get linkMenuEnable(): boolean {
    const { schema } = this.editor;
    return !!schema.marks.link;
  }

  private get textMenuEnable(): boolean {
    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.some(extension => {
      return extension.options.bubble;
    });
  }

  private get isLinkSelection(): boolean {
    const { state } = this.editor;
    const { tr } = state;
    const { selection } = tr;

    return this.$_isLinkSelection(selection);
  }

  linkBack() {
    this.setMenuType(MenuType.DEFAULT);
    this.isLinkBack = true;
  }

  @Watch('editor.state.selection')
  onSelectionChange(selection: Selection) {
    if (this.$_isLinkSelection(selection)) {
      if (!this.isLinkBack) {
        this.setMenuType(MenuType.LINK);
      }
    } else {
      this.activeMenu = this.$_getCurrentMenuType();
      this.isLinkBack = false;
    }
  }

  private generateCommandButtonComponentSpecs(editorContext: MenuData): MenuBtnViewType[] {
    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.reduce <MenuBtnViewType[]>((acc, extension) => {
      if (!extension.options.bubble) return acc;
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

  setMenuType(type: MenuType) {
    this.activeMenu = type;
  }

  $_isLinkSelection(selection: Selection) {
    const { schema } = this.editor;
    const linkType = schema.marks.link;
    if (!linkType) return false;
    if (!selection) return false;

    const { $from, $to } = selection;
    const range = getMarkRange($from, linkType);
    if (!range) return false;

    return range.to === $to.pos;
  }

  $_getCurrentMenuType(): MenuType {
    if (this.isLinkSelection) return MenuType.LINK;
    if (this.editor.state.selection instanceof TextSelection ||
      this.editor.state.selection instanceof AllSelection) {
      return MenuType.DEFAULT;
    }
    return MenuType.NONE;
  }
}
</script>
