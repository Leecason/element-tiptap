<template>
  <el-popover
    :disabled="isCodeViewMode"
    placement="bottom"
    trigger="click"
    popper-class="el-tiptap-popper"
  >
    <div class="el-tiptap-popper__menu">
      <div class="el-tiptap-popper__menu__item" @click="openUrlPrompt">
        <span>{{
          t('editor.extensions.Image.buttons.insert_image.external')
        }}</span>
      </div>

      <div
        class="el-tiptap-popper__menu__item"
        @click="imageUploadDialogVisible = true"
      >
        <span>{{
          t('editor.extensions.Image.buttons.insert_image.upload')
        }}</span>
      </div>
    </div>

    <template #reference>
      <span>
        <command-button
          :enable-tooltip="enableTooltip"
          :tooltip="t('editor.extensions.Image.buttons.insert_image.tooltip')"
          :readonly="isCodeViewMode"
          icon="image"
        />
      </span>
    </template>
  </el-popover>

  <el-dialog
    v-model="imageUploadDialogVisible"
    :title="t('editor.extensions.Image.control.upload_image.title')"
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
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import {
  ElDialog,
  ElUpload,
  ElMessageBox,
  ElPopover,
  ElLoading,
} from 'element-plus';
import { Editor } from '@tiptap/core';
import { readFileDataUrl } from '@/utils/shared';
import Logger from '@/utils/logger';
import CommandButton from '../CommandButton.vue';

export default defineComponent({
  name: 'ImageCommandButton',

  components: {
    ElDialog,
    ElUpload,
    ElPopover,
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);
    const isCodeViewMode = inject('isCodeViewMode', false);

    return { t, enableTooltip, isCodeViewMode };
  },

  data() {
    return {
      imageUploadDialogVisible: false,
      uploading: false,
    };
  },

  computed: {
    imageNodeOptions() {
      return this.editor.extensionManager.extensions.find(
        (e) => e.name === 'image'
      )!.options;
    },
  },

  methods: {
    openUrlPrompt(): void {
      ElMessageBox.prompt(
        '',
        this.t('editor.extensions.Image.control.insert_by_url.title'),
        {
          confirmButtonText: this.t(
            'editor.extensions.Image.control.insert_by_url.confirm'
          ),
          cancelButtonText: this.t(
            'editor.extensions.Image.control.insert_by_url.cancel'
          ),
          inputPlaceholder: this.t(
            'editor.extensions.Image.control.insert_by_url.placeholder'
          ),
          inputPattern: this.imageNodeOptions.urlPattern,
          inputErrorMessage: this.t(
            'editor.extensions.Image.control.insert_by_url.invalid_url'
          ),
          roundButton: true,
        }
      )
        .then(({ value: url }) => {
          this.editor.commands.setImage({ src: url });
        })
        .catch((e) => {
          Logger.error(String(e));
        });
    },

    async uploadImage(requestOptions: any) {
      const { file } = requestOptions;

      const uploadRequest = this.imageNodeOptions.uploadRequest;

      const loadingInstance = ElLoading.service({
        target: '.el-tiptap-upload',
      });
      try {
        const url = await (uploadRequest
          ? uploadRequest(file)
          : readFileDataUrl(file));
        this.editor.commands.setImage({ src: url });
        this.imageUploadDialogVisible = false;
      } catch (e) {
        Logger.error(String(e));
      } finally {
        this.$nextTick(() => {
          loadingInstance.close();
        });
      }
    },
  },
});
</script>
