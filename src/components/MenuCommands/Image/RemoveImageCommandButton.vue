<template>
  <command-button
    :command="editorContext.commands.remove_image"
    :tooltip="t('editor.extensions.Image.buttons.remove_image.tooltip')"
    icon="regular/trash-alt"
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
export default class RemoveImageCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;
};
</script>
