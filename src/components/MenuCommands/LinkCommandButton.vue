<template>
  <command-button
    :is-active="editorContext.isActive.link()"
    :command="openApplyLinkControl"
    :tooltip="t('editor.extensions.Link.tooltip')"
    icon="link"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { MenuData } from '../../types/element-tiptap';
import CommandButton from './CommandButton.vue';
import i18nMixin from '../../mixins/i18nMixin';

@Component({
  components: {
    CommandButton,
  },
})
export default class LinkCommandButton extends mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  openApplyLinkControl (): void {
    this.$prompt('', this.t('editor.extensions.Link.control.title'), {
      confirmButtonText: this.t('editor.extensions.Link.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Link.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Link.control.placeholder'),
      roundButton: true,
    }).then(({ value: href }: { value: string }): void => {
      this.editorContext.commands.link({ href });
    }).catch(() => {

    });
  }
};
</script>
