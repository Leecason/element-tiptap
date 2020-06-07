<template>
  <command-button
    :command="() => isFullscreen = !isFullscreen"
    :tooltip="buttonTooltip"
    :icon="isFullscreen ? 'compress' : 'expand'"
    :is-active="isFullscreen"
  />
</template>

<script lang="ts">
import { Component, Inject, Mixins } from 'vue-property-decorator';
import { EditorStateOptions } from '@/../types';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class FullscreenCommandButton extends Mixins(i18nMixin) {
  @Inject() readonly editorStateOptions!: EditorStateOptions;

  get isFullscreen (): EditorStateOptions['isFullscreen'] {
    return this.editorStateOptions.isFullscreen;
  }

  set isFullscreen (val: boolean) {
    // eslint-disable-next-line no-debugger
    this.editorStateOptions.isFullscreen = val;
  }

  private get buttonTooltip () {
    return this.isFullscreen
      ? this.t('editor.extensions.Fullscreen.tooltip.exit_fullscreen')
      : this.t('editor.extensions.Fullscreen.tooltip.fullscreen');
  }
};
</script>
