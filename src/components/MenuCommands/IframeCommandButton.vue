<template>
  <command-button
    :command="openInsertVideoControl"
    :tooltip="t('editor.extensions.Iframe.tooltip')"
    icon="video"
  />
</template>

<script>
import CommandButton from './CommandButton.vue';
import i18nMixin from '../../mixins/i18nMixin';

export default {
  name: 'IframeCommandButton',

  components: {
    CommandButton,
  },

  mixins: [i18nMixin],

  props: {
    editorContext: {
      type: Object,
      required: true,
    },
  },

  methods: {
    openInsertVideoControl () {
      this.$prompt('', this.t('editor.extensions.Iframe.control.title'), {
        confirmButtonText: this.t('editor.extensions.Iframe.control.confirm'),
        cancelButtonText: this.t('editor.extensions.Iframe.control.cancel'),
        inputPlaceholder: this.t('editor.extensions.Iframe.control.placeholder'),
        roundButton: true,
      }).then(({ value: href }) => {
        this.editorContext.commands.iframe({ src: href });
      }).catch(() => {

      });
    },
  },
};
</script>
