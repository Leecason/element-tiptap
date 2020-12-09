<template>
  <command-button
    :command="openInsertVideoControl"
    :enable-tooltip="et.tooltip"
    :tooltip="et.t('editor.extensions.Iframe.buttons.insert_iframe.tooltip')"
    :readonly="et.isCodeViewMode"
    icon="photo-video"
  />
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { MessageBox } from 'element-ui';
import { MenuData } from 'tiptap';
import CommandButton from '../CommandButton.vue';
import urlParser from 'js-video-url-parser';

@Component({
  components: {
    CommandButton,
  },
})
export default class InsertIframeCommandButton extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Inject() readonly et!: any;

  openInsertVideoControl (): void {
    MessageBox.prompt('', this.et.t('editor.extensions.Iframe.control.insert_by_url.title'), {
      confirmButtonText: this.et.t('editor.extensions.Iframe.control.insert_by_url.confirm'),
      cancelButtonText: this.et.t('editor.extensions.Iframe.control.insert_by_url.cancel'),
      inputPlaceholder: this.et.t('editor.extensions.Iframe.control.insert_by_url.placeholder'),
      roundButton: true,
    // @ts-ignore
    }).then(({ value: href }) => {
      // Check if this is url or embed
      if (href.includes('iframe')) {
        const parsedEmbed = (new DOMParser()).parseFromString(href, 'text/html');
        const iframe = parsedEmbed.querySelector('iframe');

        this.editorContext.commands.iframe({
          // @ts-ignore
          src: iframe.getAttribute('src'),
          // @ts-ignore
          width: iframe.getAttribute('width'),
          // @ts-ignore
          height: iframe.getAttribute('height'),
        });
      } else {
        // Parse video url to embed
        const parsedInfo = urlParser.parse(href);

        href = parsedInfo ? urlParser.create({
          videoInfo: parsedInfo,
          format: 'embed',
        }) : href;

        this.editorContext.commands.iframe({
          src: href
        });
      }
    }).catch(() => {

    });
  }
};
</script>

<style lang="scss">

</style>
