<template>
  <command-button
    :command="toggleFullScreen"
    :tooltip="buttonTooltip"
    :icon="isFullscreen ? 'compress' : 'expand'"
  />
</template>

<script lang="ts">
import 'vue-awesome/icons/expand';
import 'vue-awesome/icons/compress';
import { Component, Mixins } from 'vue-property-decorator';
import i18nMixin from '@/mixins/i18nMixin';
import {
  fullscreenStatus,
  requestFullscreen,
  exitFullscreen,
  onFullScreenEvent,
  offFullScreenEvent,
} from '@/utils/fullscreen';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class FullscreenCommandButton extends Mixins(i18nMixin) {
  isFullscreen = false;

  private get buttonTooltip () {
    return this.isFullscreen
      ? this.t('editor.extensions.Fullscreen.tooltip.exit_fullscreen')
      : this.t('editor.extensions.Fullscreen.tooltip.fullscreen');
  }

  private mounted () {
    onFullScreenEvent(this.onFullscreenChange);
  }

  private beforeDestroy () {
    offFullScreenEvent(this.onFullscreenChange);
  }

  onFullscreenChange () {
    this.isFullscreen = fullscreenStatus();
  }

  toggleFullScreen () {
    if (this.isFullscreen) {
      exitFullscreen();
    } else {
      const editorEl = this.$el.closest('.el-tiptap-editor');
      if (editorEl) requestFullscreen(editorEl);
    }
  }
};
</script>
