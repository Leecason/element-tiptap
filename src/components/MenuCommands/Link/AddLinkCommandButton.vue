<template>
  <command-button
    :is-active="editorContext.isActive.link()"
    :command="openApplyLinkControl"
    :tooltip="t('editor.extensions.Link.add.tooltip')"
    icon="link"
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
export default class AddLinkCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

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
