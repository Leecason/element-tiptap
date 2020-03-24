<template>
  <div class="image-bubble-menu">
    <edit-image-command-button
      :editor-context="editorContext"
      :init-image-attrs="imageAttrs"
    />

    <remove-image-command-button
      :editor-context="editorContext"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Editor, MenuData } from 'tiptap';
import { isNodeSelection } from 'prosemirror-utils';
import EditImageCommandButton from '../MenuCommands/Image/EditImageCommandButton.vue';
import RemoveImageCommandButton from '../MenuCommands/Image/RemoveImageCommandButton.vue';

@Component({
  components: {
    EditImageCommandButton,
    RemoveImageCommandButton,
  },
})
export default class ImageBubbleMenu extends Vue {
  @Prop({
    type: Editor,
    required: true,
  })
  readonly editor!: Editor;

  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  private get imageAttrs (): Object {
    const { selection } = this.editor.state;
    if (isNodeSelection(selection)) {
      // @ts-ignore
      const { node } = selection;
      return node.attrs;
    }
    return {};
  }
};
</script>

<style lang="scss">
.image-bubble-menu {
  display: flex;
}
</style>
