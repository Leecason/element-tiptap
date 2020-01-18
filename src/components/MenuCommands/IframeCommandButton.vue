<template>
  <command-button
    :command="openInsertVideoControl"
    :tooltip="$i18n('editor.extensions.Iframe.tooltip')"
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
      this.$prompt('', 'Insert Video', {
        confirmButtonText: 'Insert',
        cancelButtonText: 'Cancel',
        inputPlaceholder: 'Href',
        roundButton: true,
      }).then(({ value: href }) => {
        this.editorContext.commands.iframe({ src: href });
      }).catch(() => {

      });
    },
  },
};
</script>
