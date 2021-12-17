<template>
  <command-button
    :command="removeImage"
    :enable-tooltip="et.tooltip"
    :tooltip="et.t('editor.extensions.Image.buttons.remove_image.tooltip')"
    icon="regular/trash-alt"
  />
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { EditorView } from 'prosemirror-view';
import { deleteSelection } from 'prosemirror-commands';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class RemoveImageCommandButton extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly view!: EditorView;

  @Inject() readonly et!: any;

  private removeImage() {
    const { state, dispatch } = this.view;
    deleteSelection(state, dispatch);
  }
};
</script>
