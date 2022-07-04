<template>
  <component :is="icon" width="16" height="16" v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'icon',

  props: {
    name: String,
  },

  computed: {
    icon() {
      return defineAsyncComponent(() => import(`../../icons/${this.name}.svg`));
    },
  },
});
</script>
