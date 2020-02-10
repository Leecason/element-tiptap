<template>
  <command-button
    :command="openInsertVideoControl"
    :tooltip="t('editor.extensions.Iframe.tooltip')"
    icon="video"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from '../../types/element-tiptap';
import CommandButton from './CommandButton.vue';
import i18nMixin from '../../mixins/i18nMixin';

@Component({
  components: {
    CommandButton,
  },
})
export default class IframeCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  openInsertVideoControl (): void {
    this.$prompt('', this.t('editor.extensions.Iframe.control.title'), {
      confirmButtonText: this.t('editor.extensions.Iframe.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Iframe.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Iframe.control.placeholder'),
      roundButton: true,
    }).then(({ value: href }: { value: string }): void => {
      this.editorContext.commands.iframe({ src: href });
    }).catch(() => {

    });
  }
};
</script>
