<template>
  <div class="link-bubble-menu">
    <slot name="prepend" />

    <open-link-command-button
      :url="linkAttrs.href"
    />
    <edit-link-command-button
      :editor-context="editorContext"
      :init-link-attrs="linkAttrs"
    />
    <unlink-command-button
      :editor-context="editorContext"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import OpenLinkCommandButton from '@/components/MenuCommands/Link/OpenLinkCommandButton.vue';
import EditLinkCommandButton from '@/components/MenuCommands/Link/EditLinkCommandButton.vue';
import UnlinkCommandButton from '@/components/MenuCommands/Link/UnlinkCommandButton.vue';

@Component({
  components: {
    OpenLinkCommandButton,
    EditLinkCommandButton,
    UnlinkCommandButton,
  },
})
export default class LinkBubbleMenu extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  private get linkAttrs() {
    const { getMarkAttrs } = this.editorContext;
    const linkAttrs = getMarkAttrs('link');
    return linkAttrs;
  }
};
</script>

<style lang="scss">
.link-bubble-menu {
  display: flex;
}
</style>
