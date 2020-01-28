<template>
  <el-popover
    ref="popoverRef"
    placement="bottom"
    trigger="click"
    popper-class="el-tiptap-popper"
  >
    <div class="colors-container">
      <div class="predefined-colors__container">
        <div
          v-for="color in predefinedColors"
          :key="color"
          class="color__wrapper"
        >
          <div
            :style="{
              'background-color': color,
            }"
            class="color"
            @click="selectColor(color)"
          />
        </div>
      </div>

      <div
        v-if="resetButtonText"
        class="colors-container__footer"
      >
        <el-button
          type="text"
          @click="selectColor(null)"
        >
          {{ resetButtonText }}
        </el-button>
      </div>
    </div>

    <command-button
      slot="reference"
      :tooltip="tooltip"
      :icon="icon"
    />
  </el-popover>
</template>

<script>
import 'vue-awesome/icons/check';
import CommandButton from './CommandButton.vue';

export default {
  name: 'ColorPopover',

  components: {
    CommandButton,
  },

  props: {
    predefinedColors: {
      type: Array,
      default: () => [],
    },

    tooltip: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    resetButtonText: {
      type: String,
      default: '',
    }
  },

  methods: {
    selectColor (color) {
      this.$emit('select', color);

      this.$refs.popoverRef.doClose();
    },
  },
};
</script>
