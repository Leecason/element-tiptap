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
            @mousedown.prevent
            @click.stop="selectColor(color)"
          />
        </div>
      </div>

      <div
        v-if="resetButtonText"
        class="colors-container__footer"
      >
        <span
          @mousedown.prevent
          @click="selectColor('')"
        >
          <el-button type="text">
            {{ resetButtonText }}
          </el-button>
        </span>
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
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { Button, Popover } from 'element-ui';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    [Button.name]: Button,
    [Popover.name]: Popover,
    CommandButton,
  },
})
export default class ColorPopover extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly predefinedColors!: string[];

  @Prop({
    type: String,
    required: true,
  })
  readonly tooltip!: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly icon!: string;

  @Prop({
    type: String,
    default: '',
  })
  readonly resetButtonText!: string;

  @Emit('select')
  selectColor (color: string): string {
    // @ts-ignore
    this.$refs.popoverRef.doClose();

    return color;
  }
};
</script>
