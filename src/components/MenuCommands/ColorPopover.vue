<template>
  <el-popover
    ref="popoverRef"
    placement="bottom"
    trigger="click"
    class="text-color-popover"
  >
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
  },

  methods: {
    selectColor (color) {
      this.$emit('select', color);

      this.$refs.popoverRef.doClose();
    },
  },
};
</script>
