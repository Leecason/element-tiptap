<template>
  <command-button
    :command="openInsertVideoControl"
    :tooltip="t('editor.extensions.Iframe.tooltip')"
    icon="video"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MessageBox } from 'element-ui';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from './CommandButton.vue';

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
    MessageBox.prompt('', this.t('editor.extensions.Iframe.control.title'), {
      confirmButtonText: this.t('editor.extensions.Iframe.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Iframe.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Iframe.control.placeholder'),
      roundButton: true,
    // @ts-ignore
    }).then(({ value: href }) => {
      this.editorContext.commands.iframe({ src: href });
    }).catch(() => {

    });
  }
};
</script>
