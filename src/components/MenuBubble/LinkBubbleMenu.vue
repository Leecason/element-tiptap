<template>
  <div class="link-bubble-menu">
    <edit-link-command-button
      :editor-context="editorContext"
      :init-url="url"
    >
    </edit-link-command-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import EditLinkCommandButton from '@/components/MenuCommands/EditLinkCommandButton.vue';

@Component({
  components: {
    EditLinkCommandButton,
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
