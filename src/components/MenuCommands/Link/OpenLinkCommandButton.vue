<template>
  <command-button
    :command="openLink"
    :enable-tooltip="et.tooltip"
    :tooltip="et.t('editor.extensions.Link.open.tooltip')"
    icon="external-link-alt"
  />
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class OpenLinkCommandButton extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly url!: string;

  @Inject() readonly et!: any;

  openLink() {
    if (this.url) {
      // prevent attack
      const newTab = window.open();
      if (newTab) {
        newTab.opener = null;
        newTab.location.href = this.url;
      }
    }
  }
};
</script>
