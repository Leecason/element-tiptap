<template>
  <el-dropdown
    placement="bottom"
    trigger="click"
    popper-class="el-tiptap-dropdown-popper"
    @command="toggleHeading"
  >
    <command-button
      :enable-tooltip="enableTooltip"
      :is-active="editor.isActive('heading')"
      :tooltip="t('editor.extensions.Heading.tooltip')"
      :disabled="isCodeViewMode"
      icon="heading"
    />
    <template #dropdown>
      <el-dropdown-menu slot="dropdown" class="el-tiptap-dropdown-menu">
        <el-dropdown-item
          v-for="level in [0, ...levels]"
          :key="level"
          :command="level"
        >
          <div
            :class="[
              {
                'el-tiptap-dropdown-menu__item--active':
                  level > 0
                    ? editor.isActive('heading', {
                        level,
                      })
                    : editor.isActive('paragraph'),
              },
              'el-tiptap-dropdown-menu__item',
            ]"
          >
            <template v-if="level > 0">
              <component :is="'h' + level" data-item-type="heading">
                {{ t('editor.extensions.Heading.buttons.heading') }} {{ level }}
              </component>
            </template>
            <span v-else>{{
              t('editor.extensions.Heading.buttons.paragraph')
            }}</span>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import type { Level } from '@tiptap/extension-heading';
import { Editor } from '@tiptap/core';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'HeadingDropdown',

  components: {
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },

    levels: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);
    const isCodeViewMode = inject('isCodeViewMode', false);

    return { t, enableTooltip, isCodeViewMode };
  },

  methods: {
    toggleHeading(level: Level) {
      if (level > 0) {
        this.editor.commands.toggleHeading({ level });
      } else {
        this.editor.commands.setParagraph();
      }
    },
  },
});
</script>
