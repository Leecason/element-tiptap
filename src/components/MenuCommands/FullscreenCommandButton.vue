<template>
  <command-button
    :command="toggleFullscreen"
    :tooltip="buttonTooltip"
    :icon="isFullscreen ? 'compress' : 'expand'"
    :is-active="isFullscreen"
  />
</template>

<script lang="ts">
import { Component, Inject, InjectReactive, Mixins } from 'vue-property-decorator';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class FullscreenCommandButton extends Mixins(i18nMixin) {
  @Inject() readonly toggleFullscreen!: Function;
  @InjectReactive() readonly isFullscreen!: boolean;

  private get buttonTooltip () {
    return this.isFullscreen
      ? this.t('editor.extensions.Fullscreen.tooltip.exit_fullscreen')
      : this.t('editor.extensions.Fullscreen.tooltip.fullscreen');
  }
};
</script>
