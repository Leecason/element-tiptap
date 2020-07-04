<template>
  <command-button
    :command="() => editorContext.commands.link({ href: '' })"
    :enable-tooltip="et.tooltip"
    :tooltip="et.t('editor.extensions.Link.unlink.tooltip')"
    icon="unlink"
  />
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class UnlinkCommandButton extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Inject() readonly et!: any;
};
</script>
