<template>
  <div>
    <command-button
      :command="togglePreviewDialogVisible"
      :tooltip="t('editor.extensions.Preview.tooltip')"
      icon="eye"
    />

    <el-dialog
      :title="t('editor.extensions.Preview.dialog.title')"
      :visible.sync="previewDialogVisible"
      :width="contentWidth"
      :append-to-body="true"
    >
      <div class="el-tiptap-editor__content">
        <div v-html="html"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import { Dialog } from 'element-ui';
import { MenuData } from 'tiptap';
import { PREVIEW_WINDOW_WIDTH } from '@/constants';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from './CommandButton.vue';

@Component({
  components: {
    [Dialog.name]: Dialog,
    CommandButton,
  },
})
export default class PreviewCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Prop({
    type: String,
    default: PREVIEW_WINDOW_WIDTH,
  })
  readonly contentWidth!: string;

  html: string = '';
  previewDialogVisible: boolean = false;

  @Watch('previewDialogVisible')
  onVisibleChange (visible: boolean) {
    if (visible) this.getHtml();
  }

  togglePreviewDialogVisible () {
    this.previewDialogVisible = !this.previewDialogVisible;
  }

  getHtml () {
    this.html = this.editorContext.editor.getHTML();
  }
}
</script>
