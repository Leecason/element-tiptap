<template>
  <command-button
    :command="removeImage"
    :tooltip="t('editor.extensions.Image.buttons.remove_image.tooltip')"
    icon="regular/trash-alt"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import i18nMixin from '@/mixins/i18nMixin';
import { EditorView } from 'prosemirror-view';
import { deleteSelection } from 'prosemirror-commands';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class RemoveImageCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly view!: EditorView;

  private removeImage () {
    const { state, dispatch } = this.view;
    deleteSelection(state, dispatch);
  }
};
</script>
