<template>
  <div class="link-bubble-menu">
    <open-link-command-button
      :url="url"
    />
    <edit-link-command-button
      :editor-context="editorContext"
      :init-url="url"
    />
    <unlink-command-button
      :editor-context="editorContext"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import OpenLinkCommandButton from '@/components/MenuCommands/OpenLinkCommandButton.vue';
import EditLinkCommandButton from '@/components/MenuCommands/EditLinkCommandButton.vue';
import UnlinkCommandButton from '@/components/MenuCommands/UnlinkCommandButton.vue';

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

  private get url (): string {
    const { getMarkAttrs } = this.editorContext;
    const linkAttrs = getMarkAttrs('link');
    return linkAttrs.href;
  }
};
</script>

<style lang="scss">
.link-bubble-menu {
  display: flex;
}
</style>
