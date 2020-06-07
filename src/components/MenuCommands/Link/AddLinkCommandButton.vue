<template>
  <command-button
    :is-active="editorContext.isActive.link()"
    :readonly="editorStateOptions.isCodeViewMode"
    :command="openApplyLinkControl"
    :tooltip="t('editor.extensions.Link.add.tooltip')"
    icon="link"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins, Inject } from 'vue-property-decorator';
import { MessageBox } from 'element-ui';
import { MenuData } from 'tiptap';
import { EditorStateOptions } from '@/../types';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class AddLinkCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Inject() readonly editorStateOptions!: EditorStateOptions;

  openApplyLinkControl (): void {
    MessageBox.prompt('', this.t('editor.extensions.Link.add.control.title'), {
      confirmButtonText: this.t('editor.extensions.Link.add.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Link.add.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Link.add.control.placeholder'),
      roundButton: true,
    // @ts-ignore
    }).then(({ value: href }) => {
      this.editorContext.commands.link({ href });
    }).catch(() => {

    });
  }
};
</script>
