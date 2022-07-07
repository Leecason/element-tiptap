<template>
  <command-button
    :command="() => editor.commands.unsetLink()"
    :enable-tooltip="enableTooltip"
    :tooltip="t('editor.extensions.Link.unlink.tooltip')"
    icon="unlink"
  />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { Editor } from '@tiptap/vue-3';
import CommandButton from '../CommandButton.vue';

export default defineComponent({
  name: 'UnlinkCommandButton',

  components: {
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);

    return { t, enableTooltip };
  },
});
</script>
