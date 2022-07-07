<template>
  <command-button
    :command="openInsertVideoControl"
    :enable-tooltip="enableTooltip"
    :tooltip="t('editor.extensions.Iframe.tooltip')"
    :readonly="isCodeViewMode"
    icon="video"
  />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { Editor } from '@tiptap/vue-3';
import { ElMessageBox } from 'element-plus';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'IframeCommandButton',

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
    const isCodeViewMode = inject('isCodeViewMode', false);

    return { t, enableTooltip, isCodeViewMode };
  },

  methods: {
    async openInsertVideoControl() {
      const { value: href } = await ElMessageBox.prompt(
        '',
        this.t('editor.extensions.Iframe.control.title'),
        {
          confirmButtonText: this.t('editor.extensions.Iframe.control.confirm'),
          cancelButtonText: this.t('editor.extensions.Iframe.control.cancel'),
          inputPlaceholder: this.t(
            'editor.extensions.Iframe.control.placeholder'
          ),
          roundButton: true,
        }
      );

      this.editor.commands.setIframe({ src: href });
    },
  },
});
</script>
