<template>
  <el-dropdown
    placement="bottom"
    trigger="click"
    @command="i => i > 0
      ? editorContext.commands.heading({ level: i })
      : editorContext.commands.paragraph()
    "
  >
    <command-button
      :is-active="isHeadingActive()"
      :enable-tooltip="et.tooltip"
      :tooltip="et.t('editor.extensions.Heading.tooltip')"
      :readonly="et.isCodeViewMode"
      icon="heading"
    />
    <el-dropdown-menu
      slot="dropdown"
      class="el-tiptap-dropdown-menu"
    >
      <el-dropdown-item
        :command="0"
        :class="{
          'el-tiptap-dropdown-menu__item--active': editorContext.isActive.paragraph(),
        }"
        class="el-tiptap-dropdown-menu__item"
      >
        <span>{{ et.t('editor.extensions.Heading.buttons.paragraph') }}</span>
      </el-dropdown-item>
      <el-dropdown-item
        v-for="i in level"
        :key="i"
        :command="i"
        :class="{
          'el-tiptap-dropdown-menu__item--active': isHeadingActive(i),
        }"
        class="el-tiptap-dropdown-menu__item"
      >
        <component
          :is="'h' +i"
          data-item-type="heading"
        >
          {{ et.t('editor.extensions.Heading.buttons.heading') }} {{ i }}
        </component>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
import { isHeadingActive } from '@/utils/heading';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    CommandButton,
  },
})
export default class HeadingDropdown extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Inject() readonly et!: any;

  private get editor() {
    return this.editorContext.editor;
  }

  private get level() {
    return this.editor.extensions.options.heading.level;
  }

  private isHeadingActive(level: number): boolean {
    return isHeadingActive(this.editor.state, level);
  }
};
</script>
