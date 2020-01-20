<template>
  <command-button
    :is-active="editorContext.isActive.link()"
    :command="openApplyLinkControl"
    tooltip="link"
    icon="link"
  />
</template>

<script>
import CommandButton from './CommandButton.vue';
import i18nMixin from '../../mixins/i18nMixin';

export default {
  name: 'AddLinkCommandButton',

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
    openApplyLinkControl () {
      this.$prompt('', this.i18n('dialog.link.title'), {
        confirmButtonText: this.i18n('dialog.link.confirmButtonText'),
        cancelButtonText: this.i18n('dialog.link.cancelButtonText'),
        inputPlaceholder: this.i18n('dialog.link.inputPlaceholder'),
        roundButton: true,
      }).then(({ value: href }) => {
        this.editorContext.commands.link({ href });
      }).catch(() => {

      });
    },
  },
};
</script>
