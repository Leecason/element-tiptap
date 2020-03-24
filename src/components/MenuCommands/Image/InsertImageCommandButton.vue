<template>
  <div>
    <el-popover
      placement="bottom"
      trigger="click"
      popper-class="el-tiptap-popper"
    >
      <div class="el-tiptap-popper__menu">
        <div
          class="el-tiptap-popper__menu__item"
          @click="openUrlPrompt"
        >
          <span>{{ t('editor.extensions.Image.buttons.insert_image.external') }}</span>
        </div>

        <div
          class="el-tiptap-popper__menu__item"
          @click="imageUploadDialogVisible = true"
        >
          <span>{{ t('editor.extensions.Image.buttons.insert_image.upload') }}</span>
        </div>
      </div>

      <command-button
        slot="reference"
        :tooltip="t('editor.extensions.Image.buttons.insert_image.tooltip')"
        icon="image"
      />
    </el-popover>

    <el-dialog
      :title="t('editor.extensions.Image.control.upload_image.title')"
      :visible.sync="imageUploadDialogVisible"
      :append-to-body="true"
    >
      <el-upload
        :http-request="uploadImage"
        :show-file-list="false"
        class="el-tiptap-upload"
        action="#"
        drag
        accept="image/*"
      >
        <div class="el-tiptap-upload__icon">
          <i class="fa fa-upload" />
        </div>
        <div class="el-tiptap-upload__text">
          {{ t('editor.extensions.Image.control.upload_image.button') }}
        </div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { Dialog, Upload, MessageBox, Popover, Loading } from 'element-ui';
import { HttpRequestOptions } from 'element-ui/types/upload';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import { readFileDataUrl } from '@/utils/shared';
import Logger from '@/utils/logger';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    [Dialog.name]: Dialog,
    [Upload.name]: Upload,
    [Popover.name]: Popover,
    CommandButton,
  },
})
export default class ImageCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  imageUploadDialogVisible = false;
  uploading = false;

  private get imageNodeOptions () {
    return this.editorContext.editor.extensions.options.image;
  }

  openUrlPrompt (): void {
    MessageBox.prompt('', this.t('editor.extensions.Image.control.insert_by_url.title'), {
      confirmButtonText: this.t('editor.extensions.Image.control.insert_by_url.confirm'),
      cancelButtonText: this.t('editor.extensions.Image.control.insert_by_url.cancel'),
      inputPlaceholder: this.t('editor.extensions.Image.control.insert_by_url.placeholder'),
      inputPattern: this.imageNodeOptions.urlPattern,
      inputErrorMessage: this.t('editor.extensions.Image.control.insert_by_url.invalid_url'),
      roundButton: true,
    // @ts-ignore
    }).then(({ value: url }) => {
      this.editorContext.commands.image({ src: url });
    }).catch(() => {

    });
  }

  async uploadImage (requestOptions: HttpRequestOptions) {
    const { file } = requestOptions;

    const uploadRequest = this.imageNodeOptions.uploadRequest;

    const loadingInstance = Loading.service({
      target: '.el-tiptap-upload',
    });
    try {
      const url = await (uploadRequest ? uploadRequest(file) : readFileDataUrl(file));
      this.editorContext.commands.image({ src: url });
      this.imageUploadDialogVisible = false;
    } catch (e) {
      Logger.error(e);
    } finally {
      this.$nextTick(() => {
        loadingInstance.close();
      });
    }
  }
};
</script>
