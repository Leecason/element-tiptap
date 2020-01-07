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

<style lang="scss" scoped>
.predefined-colors__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 240px;

  .color {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    color: #ffffff;
    height: 40px;
    width: 40px;

    &__wrapper {
      align-items: center;
      cursor: pointer;
      display: flex;
      flex: 0 0 25%;
      justify-content: center;
      padding: 10px;
    }
  }
}
</style>
