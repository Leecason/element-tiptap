<template>
  <command-button
    :command="openLink"
    :tooltip="t('editor.extensions.Link.open.tooltip')"
    icon="external-link-alt"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class OpenLinkCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: String,
    required: true,
  })
  readonly url!: string;

  openLink () {
    if (this.url) {
      window.open(this.url);
    }
  }
};
</script>
