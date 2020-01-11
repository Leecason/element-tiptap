<template>
  <el-popover
    ref="popoverRef"
    placement="bottom"
    trigger="click"
    class="text-color-popover"
  >
    <div class="predefined-colors__container">
      <div
        v-for="color in colors"
        :key="color"
        class="color__wrapper"
      >
        <div
          :style="{
            'background-color': color,
          }"
          class="color"
          @click="setTextColor(color)"
        />
      </div>
    </div>

    <command-button
      slot="reference"
      tooltip="Text Color"
      icon="font"
    />
  </el-popover>
</template>

<script>
import 'vue-awesome/icons/check';
import CommandButton from './CommandButton.vue';

export default {
  name: 'TextColorPopover',

  components: {
    CommandButton,
  },

  props: {
    editorContext: {
      type: Object,
      required: true,
    },
  },

  computed: {
    colors () {
      return this.editorContext.editor.extensions.options.text_color.colors;
    },
  },

  methods: {
    setTextColor (color) {
      this.editorContext.commands.text_color(color);

      this.$refs.popoverRef.doClose();
    },
  },
};
</script>
