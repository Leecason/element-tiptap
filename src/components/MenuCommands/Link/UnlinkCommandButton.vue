<template>
  <command-button
    :command="editorContext.commands.unlink"
    :tooltip="t('editor.extensions.Link.unlink.tooltip')"
    icon="unlink"
  />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    CommandButton,
  },
})
export default class UnlinkCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;
};
</script>
