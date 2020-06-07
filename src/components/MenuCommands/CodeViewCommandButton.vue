<template>
  <command-button
    :command="() => isCodeViewMode = !isCodeViewMode"
    :tooltip="t('editor.extensions.CodeView.tooltip')"
    icon="regular/file-code"
    :is-active="editorStateOptions.isCodeViewMode"
  />
</template>

<script lang="ts">
import { Component, Inject, Mixins } from 'vue-property-decorator';
import { EditorStateOptions } from '@/../types';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class CodeViewCommandButton extends Mixins(i18nMixin) {
  @Inject() readonly editorStateOptions!: EditorStateOptions;

  get isCodeViewMode (): EditorStateOptions['isCodeViewMode'] {
    return this.editorStateOptions.isCodeViewMode;
  }

  set isCodeViewMode (val: boolean) {
    this.editorStateOptions.isCodeViewMode = val;
  }
};
</script>
