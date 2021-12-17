<template>
  <el-popover
    v-model="popoverVisible"
    :disabled="et.isCodeViewMode"
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
          @click.stop="confirmColor(color)"
        />
      </div>

      <div class="color__wrapper">
        <div
          class="color color--remove"
          @mousedown.prevent
          @click.stop="confirmColor('')"
        />
      </div>
    </div>

    <div class="color-hex">
      <el-input
        v-model="color"
        placeholder="HEX"
        autofocus="true"
        maxlength="7"
        size="small"
        class="color-hex__input"
      />

      <el-button
        type="text"
        size="small"
        class="color-hex__button"
        @click="confirmColor(color)"
      >
        {{ confirmText }}
      </el-button>
    </div>

    <command-button
      slot="reference"
      :enable-tooltip="et.tooltip"
      :tooltip="tooltip"
      :icon="icon"
      :readonly="et.isCodeViewMode"
    />
  </el-popover>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Vue, Inject } from 'vue-property-decorator';
import { Button, Popover, Input } from 'element-ui';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    [Button.name]: Button,
    [Popover.name]: Popover,
    [Input.name]: Input,
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
    default: 'OK',
  })
  readonly confirmText!: string; // TODO: i18n ?

  private color: string = '';
  private popoverVisible: boolean = false;

  @Inject() readonly et!: any;

  @Watch('selectedColor', {
    immediate: true,
  })
  onSelectedColorChange(color: string): void {
    this.color = color;
  }

  @Emit('confirm')
  confirmColor(color: string): string {
    this.popoverVisible = false;

    return color;
  }
};
</script>
