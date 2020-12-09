<template>
  <div class="iframe-bubble-menu">
    <edit-iframe-command-button
      :node="node"
      :update-attrs="updateAttrs"
    />

    <remove-iframe-command-button
      :view="view"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import RemoveIframeCommandButton from '@/components/MenuCommands/Iframe/RemoveIframeCommandButton.vue';
import EditIframeCommandButton from '@/components/MenuCommands/Iframe/EditIframeCommandButton.vue';

  @Component({
    components: {
      EditIframeCommandButton,
      RemoveIframeCommandButton
    },
  })
export default class IframeBubbleMenu extends Vue {
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
