<template>
  <div class="link-bubble-menu">
    <slot name="prepend" />

    <open-link-command-button :url="linkAttrs.href" />
    <edit-link-command-button :editor="editor" :init-link-attrs="linkAttrs" />
    <unlink-command-button :editor="editor" />
  </div>
</template>

<script lang="ts">
import { Editor } from '@tiptap/vue-3';
import { defineComponent } from 'vue';
import OpenLinkCommandButton from '@/components/MenuCommands/Link/OpenLinkCommandButton.vue';
import EditLinkCommandButton from '@/components/MenuCommands/Link/EditLinkCommandButton.vue';
import UnlinkCommandButton from '@/components/MenuCommands/Link/UnlinkCommandButton.vue';

export default defineComponent({
  name: 'LinkBubbleMenu',

  components: {
    OpenLinkCommandButton,
    EditLinkCommandButton,
    UnlinkCommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  computed: {
    linkAttrs() {
      return this.editor.getAttributes('link');
    },
  },
});
</script>

<style lang="scss">
.link-bubble-menu {
  display: flex;
}
</style>
