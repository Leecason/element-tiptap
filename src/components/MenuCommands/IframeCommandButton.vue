<template>
  <command-button
    :command="openInsertVideoControl"
    :enable-tooltip="et.tooltip"
    :tooltip="et.t('editor.extensions.Iframe.tooltip')"
    :readonly="et.isCodeViewMode"
    icon="video"
  />
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { MessageBox } from 'element-ui';
import { MenuData } from 'tiptap';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class IframeCommandButton extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Inject() readonly et!: any;

  openInsertVideoControl(): void {
    MessageBox.prompt('', this.et.t('editor.extensions.Iframe.control.title'), {
      confirmButtonText: this.et.t('editor.extensions.Iframe.control.confirm'),
      cancelButtonText: this.et.t('editor.extensions.Iframe.control.cancel'),
      inputPlaceholder: this.et.t('editor.extensions.Iframe.control.placeholder'),
      roundButton: true,
    // @ts-ignore
    }).then(({ value: href }) => {
      this.editorContext.commands.iframe({ src: href });
    }).catch(() => {

    });
  }
};
</script>
