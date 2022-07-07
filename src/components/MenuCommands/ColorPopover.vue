<template>
  <el-popover
    :disabled="isCodeViewMode"
    placement="bottom"
    trigger="click"
    popper-class="el-tiptap-popper"
    ref="popoverRef"
  >
    <div class="color-set">
      <div v-for="color in colorSet" :key="color" class="color__wrapper">
        <div
          :style="{
            'background-color': color,
          }"
          :class="{ 'color--selected': selectedColor === color }"
          class="color"
          @mousedown.prevent
          @click.stop="confirmColor(color)"
        />
      </div>

      <div class="color__wrapper">
        <div
          class="color color--remove"
          @mousedown.prevent
          @click.stop="confirmColor()"
        />
      </div>
    </div>

    <div class="color-hex">
      <el-input
        v-model="colorText"
        placeholder="HEX"
        autofocus="true"
        maxlength="7"
        size="small"
        class="color-hex__input"
      />

      <el-button
        text
        type="primary"
        size="small"
        class="color-hex__button"
        @click="confirmColor(colorText)"
      >
        OK
      </el-button>
    </div>

    <template #reference>
      <span>
        <command-button
          :enable-tooltip="enableTooltip"
          :tooltip="t('editor.extensions.TextColor.tooltip')"
          icon="font-color"
          :readonly="isCodeViewMode"
        />
      </span>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, unref, watch } from 'vue';
import { Editor, getMarkAttributes } from '@tiptap/vue-3';
import { ElButton, ElPopover, ElInput } from 'element-plus';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'ColorPopover',

  components: {
    ElButton,
    ElPopover,
    ElInput,
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  setup(props) {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);
    const isCodeViewMode = inject('isCodeViewMode', false);

    const popoverRef = ref();
    const colorText = ref('');

    function confirmColor(color?: string) {
      if (color) {
        props.editor.commands.setColor(color);
      } else {
        props.editor.commands.unsetColor();
      }

      unref(popoverRef).hide();
    }

    const selectedColor = computed<string>(() => {
      return getMarkAttributes(props.editor.state, 'textStyle').color || '';
    });

    watch(selectedColor, (color) => {
      colorText.value = color;
    });

    return {
      t,
      enableTooltip,
      isCodeViewMode,
      popoverRef,
      colorText,
      selectedColor,
      confirmColor,
    };
  },

  computed: {
    colorSet(): string[] {
      const colorOptions = this.editor.extensionManager.extensions.find(
        (e) => e.name === 'color'
      )!.options;
      return colorOptions.colors;
    },
  },
});
</script>
