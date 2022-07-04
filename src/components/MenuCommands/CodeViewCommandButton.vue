<template>
  <command-button
    :command="() => toggleIsCodeViewMode(!isCodeViewMode)"
    :enable-tooltip="true"
    :tooltip="t('editor.extensions.CodeView.tooltip')"
    icon="file-code"
    :is-active="isCodeViewMode"
  />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'CodeViewCommandButton',

  components: {
    CommandButton,
  },

  setup() {
    const t = inject('t');
    const isCodeViewMode = inject('isCodeViewMode', false);
    const toggleIsCodeViewMode = inject('toggleIsCodeViewMode');

    return { t, isCodeViewMode, toggleIsCodeViewMode };
  },
});
</script>
