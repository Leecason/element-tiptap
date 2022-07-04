<template>
  <node-view-wrapper as="div" class="iframe">
    <iframe class="iframe__embed" :src="node!.attrs.src"></iframe>
  </node-view-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3';

export default defineComponent({
  name: 'IframeView',

  components: {
    NodeViewWrapper,
  },

  props: nodeViewProps,
});
</script>
