<template>
  <command-button
    :command="openLink"
    :enable-tooltip="enableTooltip"
    :tooltip="t('editor.extensions.Link.open.tooltip')"
    icon="external-link"
  />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { Editor } from '@tiptap/vue-3';
import CommandButton from '../CommandButton.vue';

export default defineComponent({
  name: 'OpenLinkCommandButton',

  components: {
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);

    return { t, enableTooltip };
  },

  methods: {
    openLink() {
      if (this.url) {
        // prevent attack
        const newTab = window.open();
        if (newTab) {
          newTab.opener = null;
          newTab.location.href = this.url;
        }
      }
    },
  },
});
</script>
