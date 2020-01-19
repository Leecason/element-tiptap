<template>
  <command-button
    :is-active="editorContext.isActive.link()"
    :command="openApplyLinkControl"
    :tooltip="$i18n('editor.extensions.Link.tooltip')"
    icon="link"
  />
</template>

<script>
import CommandButton from './CommandButton.vue';
import i18nMixin from '../../mixins/i18nMixin';

export default {
  name: 'AddLinkCommandButton',

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
    openApplyLinkControl () {
      this.$prompt('', this.$i18n('editor.extensions.Link.control.title'), {
        confirmButtonText: this.$i18n('editor.extensions.Link.control.confirm'),
        cancelButtonText: this.$i18n('editor.extensions.Link.control.cancel'),
        inputPlaceholder: this.$i18n('editor.extensions.Link.control.placeholder'),
        roundButton: true,
      }).then(({ value: href }) => {
        this.editorContext.commands.link({ href });
      }).catch(() => {

      });
    },
  },
};
</script>
