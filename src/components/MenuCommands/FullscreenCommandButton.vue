<template>
  <command-button
    :command="() => isFullscreen = !isFullscreen"
    :enable-tooltip="et.tooltip"
    :tooltip="buttonTooltip"
    :icon="isFullscreen ? 'compress' : 'expand'"
    :is-active="isFullscreen"
  />
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class FullscreenCommandButton extends Vue {
  @Inject() readonly et!: any;

  get isFullscreen(): boolean {
    return this.et.isFullscreen;
  }

  set isFullscreen(val: boolean) {
    // eslint-disable-next-line no-debugger
    this.et.isFullscreen = val;
  }

  private get buttonTooltip() {
    return this.isFullscreen
      ? this.et.t('editor.extensions.Fullscreen.tooltip.exit_fullscreen')
      : this.et.t('editor.extensions.Fullscreen.tooltip.fullscreen');
  }
};
</script>
