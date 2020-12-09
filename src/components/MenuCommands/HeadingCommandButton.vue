<template>
  <command-button
    :command="() => isHeadingActive = !isHeadingActive"
    :enable-tooltip="et.tooltip"
    :tooltip="et.t('editor.extensions.CodeView.tooltip')"
    :is-active="isHeadingActive"
  >
    <div class="el-tiptap-editor__command-button__heading" slot="icon">
      <v-icon name="heading" />
      <span class="el-tiptap-editor__command-button__heading__level" v-text="level"></span>
    </div>
  </command-button>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import { MenuData } from 'tiptap';
import { isHeadingActive } from '@/utils/heading';
import CommandButton from './CommandButton.vue';
import Icon from 'vue-awesome/components/Icon.vue';

  @Component({
    components: {
      CommandButton,
      'v-icon': Icon,
    },
  })
export default class HeadingCommandButton extends Vue {
    @Prop({
      type: Object,
      required: true,
    })
    readonly editorContext!: MenuData;

    @Prop({
      type: Number,
      required: true,
    })
    readonly level!: number;

    @Inject() readonly et!: any;

    private get editor () {
      return this.editorContext.editor;
    }

    get isHeadingActive (): boolean {
      return isHeadingActive(this.editor.state, this.level);
    }

    set isHeadingActive (val: boolean) {
      this.editorContext.commands.heading({ level: this.level });
    }
};
</script>
