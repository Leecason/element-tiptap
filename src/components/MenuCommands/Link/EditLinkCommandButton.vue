<template>
  <command-button
    :command="openEditLinkControl"
    :tooltip="t('editor.extensions.Link.edit.tooltip')"
    icon="edit"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MessageBox } from 'element-ui';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class EditLinkCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Prop({
    type: String,
    required: true,
  })
  readonly initUrl!: string;

  openEditLinkControl (): void {
    MessageBox.prompt('', this.t('editor.extensions.Link.edit.control.title'), {
      confirmButtonText: this.t('editor.extensions.Link.edit.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Link.edit.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Link.edit.control.placeholder'),
      inputValue: this.initUrl,
      roundButton: true,
    // @ts-ignore
    }).then(({ value: href }) => {
      this.editorContext.commands.link({ href });
    }).catch(() => {

    });
  }
};
</script>
