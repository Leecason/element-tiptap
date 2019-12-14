<template>
  <command-button
    :is-active="editorContext.isActive.link()"
    :command="openApplyLinkControl"
    tooltip="Apply link"
    icon="link"
  />
</template>

<script>
import CommandButton from './CommandButton.vue';

export default {
  name: 'AddLinkCommandButton',

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
    openApplyLinkControl () {
      this.$prompt('', 'Apply link', {
        confirmButtonText: 'Apply',
        cancelButtonText: 'Close',
        inputPlaceholder: 'Href',
        roundButton: true,
      }).then(({ value: href }) => {
        this.editorContext.commands.link({ href });
      }).catch(() => {

      });
    },
  },
};
</script>
