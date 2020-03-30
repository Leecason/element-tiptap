<template>
  <div class="image-bubble-menu">
    <image-display-command-button
      :node="node"
      :update-attrs="updateAttrs"
    />

    <edit-image-command-button
      :node="node"
      :update-attrs="updateAttrs"
    />

    <remove-image-command-button
      :view="view"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import ImageDisplayCommandButton from '../MenuCommands/Image/ImageDisplayCommandButton.vue';
import EditImageCommandButton from '../MenuCommands/Image/EditImageCommandButton.vue';
import RemoveImageCommandButton from '../MenuCommands/Image/RemoveImageCommandButton.vue';

@Component({
  components: {
    ImageDisplayCommandButton,
    EditImageCommandButton,
    RemoveImageCommandButton,
  },
})
export default class ImageBubbleMenu extends Vue {
  @Prop({
    type: ProsemirrorNode,
    required: true,
  })
  readonly node!: ProsemirrorNode;

  @Prop({
    type: Object,
    required: true,
  })
  readonly view!: EditorView;

  @Prop({
    type: Function,
    required: true,
  })
  readonly updateAttrs!: Function;
};
</script>
