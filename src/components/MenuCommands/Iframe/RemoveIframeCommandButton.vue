<template>
  <command-button
    :command="removeIframe"
    :enable-tooltip="et.tooltip"
    :tooltip="et.t('editor.extensions.Iframe.buttons.remove_iframe.tooltip')"
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
export default class RemoveIframeCommandButton extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly view!: EditorView;

  @Inject() readonly et!: any;

  private removeIframe () {
    const { state, dispatch } = this.view;
    deleteSelection(state, dispatch);
  }
};
</script>
