<template>
  <el-popover
    ref="popoverRef"
    placement="bottom"
    trigger="click"
    popper-class="el-tiptap-popper"
  >
    <div class="color-set">
      <div
        v-for="color in colorSet"
        :key="color"
        class="color__wrapper"
      >
        <div
          :style="{
            'background-color': color,
          }"
          :class="{ 'color--selected': selectedColor === color }"
          class="color"
          @mousedown.prevent
          @click.stop="selectColor(color)"
        />
      </div>

      <div class="color__wrapper">
        <div
          class="color color--remove"
          @mousedown.prevent
          @click.stop="selectColor('')"
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
  readonly colorSet!: string[];

  @Prop({
    type: String,
    default: '',
  })
  readonly selectedColor!: string;

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
