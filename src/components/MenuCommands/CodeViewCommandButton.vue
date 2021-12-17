<template>
  <command-button
    :command="() => isCodeViewMode = !isCodeViewMode"
    :enable-tooltip="et.tooltip"
    :tooltip="et.t('editor.extensions.CodeView.tooltip')"
    icon="regular/file-code"
    :is-active="isCodeViewMode"
  />
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class CodeViewCommandButton extends Vue {
  @Inject() readonly et!: any;

  get isCodeViewMode(): boolean {
    return this.et.isCodeViewMode;
  }

  set isCodeViewMode(val: boolean) {
    this.et.isCodeViewMode = val;
  }
};
</script>
