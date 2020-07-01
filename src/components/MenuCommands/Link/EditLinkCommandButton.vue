<template>
  <command-button
    :command="openEditLinkControl"
    :enable-tooltip="et.tooltip"
    :tooltip="t('editor.extensions.Link.edit.tooltip')"
    icon="edit"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins, Inject } from 'vue-property-decorator';
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

  @Inject() readonly et!: any;

  openEditLinkControl (): void {
    const { editor } = this.editorContext;
    const { state, view } = editor;
    const { tr } = state; // current trascation, need to restore when confirmed

    MessageBox.prompt('', this.t('editor.extensions.Link.edit.control.title'), {
      confirmButtonText: this.t('editor.extensions.Link.edit.control.confirm'),
      cancelButtonText: this.t('editor.extensions.Link.edit.control.cancel'),
      inputPlaceholder: this.t('editor.extensions.Link.edit.control.placeholder'),
      inputValue: this.initUrl,
      roundButton: true,
    // @ts-ignore
    }).then(({ value: href }) => {
      // https://github.com/Leecason/element-tiptap/issues/119
      // in Firefox 77, when message-box confirm button clicked, editor will lose focus
      // and re-focus on closeDialog's next tick, https://github.com/ElemeFE/element/blob/dev/src/utils/aria-dialog.js#L66
      // but re-focus will lose the previous selection, so add link will not work
      // here need to restore the previous trascation
      view.dispatch(tr);

      this.editorContext.commands.link({ href });
    }).catch(() => {

    });
  }
};
</script>
