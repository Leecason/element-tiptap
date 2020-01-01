<template>
  <command-button
    :command="openInsertVideoControl"
    tooltip="Insert Video"
    icon="video"
  />
</template>

<script>
import CommandButton from './CommandButton.vue';

export default {
  name: 'IframeCommandButton',

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
