<template>
  <el-dropdown
    placement="bottom"
    trigger="click"
    @command="toggleFontType"
  >
    <command-button
      :tooltip="t('editor.extensions.FontType.tooltip')"
      icon="font"
    />

    <el-dropdown-menu
      slot="dropdown"
      class="el-tiptap-dropdown-menu"
    >
      <el-dropdown-item
        v-for="name in fontTypes"
        :key="name"
        :command="name"
        :class="{
          'el-tiptap-dropdown-menu__item--active': name === activeFontType,
        }"
        class="el-tiptap-dropdown-menu__item"
      >
        <span
          :data-font="name"
          :style="{ 'font-family': name }"
        >{{ name }}</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
import i18nMixin from '@/mixins/i18nMixin';
import { DEFAULT_FONT_TYPE_MAP, findActiveFontType } from '@/utils/font_type';
import { isPlainObject } from '@/utils/shared';
import Logger from '@/utils/logger';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    CommandButton,
  },
})
export default class FontTypeDropdown extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  private get editor () {
    return this.editorContext.editor;
  }

  private get fontTypes () {
    const { fontTypes } = this.editor.extensions.options.font_type;

    if (!isPlainObject(fontTypes)) {
      Logger.error('\'fontTypes\' should be an object');
      return DEFAULT_FONT_TYPE_MAP;
    }

    return fontTypes;
  }

  private get activeFontType (): string {
    return findActiveFontType(this.editor.state);
  }

  private toggleFontType (name: string) {
    if (name === this.activeFontType) {
      this.editorContext.commands.font_type('');
    } else {
      this.editorContext.commands.font_type(name);
    }
  }
};
</script>
