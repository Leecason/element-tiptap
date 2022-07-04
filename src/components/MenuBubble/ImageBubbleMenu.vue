<template>
  <div class="image-bubble-menu">
    <image-display-command-button :node="node" :update-attrs="updateAttrs" />

    <edit-image-command-button :node="node" :update-attrs="updateAttrs" />

    <remove-image-command-button :editor="editor" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { nodeViewProps } from '@tiptap/vue-3';
import ImageDisplayCommandButton from '../MenuCommands/Image/ImageDisplayCommandButton.vue';
import EditImageCommandButton from '../MenuCommands/Image/EditImageCommandButton.vue';
import RemoveImageCommandButton from '../MenuCommands/Image/RemoveImageCommandButton.vue';

export default defineComponent({
  components: {
    ImageDisplayCommandButton,
    EditImageCommandButton,
    RemoveImageCommandButton,
  },
  props: {
    editor: nodeViewProps['editor'],
    node: nodeViewProps['node'],
    updateAttrs: nodeViewProps['updateAttributes'],
  },
});
</script>
