<template>
  <command-button
    :command="openInsertVideoControl"
    tooltip="video"
    icon="video"
  />
</template>

<script>
import CommandButton from './CommandButton.vue';
import i18nMixin from '../../mixins/i18nMixin';

export default {
  name: 'IframeCommandButton',

  mixins: [i18nMixin],

  components: {
    CommandButton,
  },

  props: {
    editorContext: {
      type: Object,
      required: true,
    },
  },

  methods: {
    openInsertVideoControl () {
      this.$prompt('', this.i18n('dialog.video.title'), {
        confirmButtonText: this.i18n('dialog.video.confirmButtonText'),
        cancelButtonText: this.i18n('dialog.video.cancelButtonText'),
        inputPlaceholder: this.i18n('dialog.video.inputPlaceholder'),
        roundButton: true,
      }).then(({ value: href }) => {
        this.editorContext.commands.iframe({ src: href });
      }).catch(() => {

      });
    },
  },
};
</script>
