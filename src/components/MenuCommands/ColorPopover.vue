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

<script lang="ts">
import 'vue-awesome/icons/check';
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class ColorPopover extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  predefinedColors!: string[];

  @Prop({
    type: String,
    required: true,
  })
  tooltip!: string;

  @Prop({
    type: String,
    required: true,
  })
  icon!: string;

  @Prop({
    type: String,
    default: '',
  })
  resetButtonText!: string;

  selectColor (color: string): void {
    this.$emit('select', color);
    // @ts-ignore
    this.$refs.popoverRef.doClose();
  }
};
</script>
