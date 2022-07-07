<template>
  <div>
    <command-button
      :command="openEditImageDialog"
      :enable-tooltip="enableTooltip"
      :tooltip="t('editor.extensions.Image.buttons.image_options.tooltip')"
      icon="ellipsis-h"
    />

    <el-dialog
      v-model="editImageDialogVisible"
      :title="t('editor.extensions.Image.control.edit_image.title')"
      :append-to-body="true"
      width="400px"
      custom-class="el-tiptap-edit-image-dialog"
      @open="syncImageAttrs"
    >
      <el-form :model="imageAttrs" label-position="top" size="small">
        <el-form-item
          :label="t('editor.extensions.Image.control.edit_image.form.src')"
        >
          <el-input :value="imageAttrs.src" autocomplete="off" disabled />
        </el-form-item>

        <el-form-item
          :label="t('editor.extensions.Image.control.edit_image.form.alt')"
        >
          <el-input v-model="imageAttrs.alt" autocomplete="off" />
        </el-form-item>

        <el-form-item>
          <el-col :span="11">
            <el-form-item
              :label="
                t('editor.extensions.Image.control.edit_image.form.width')
              "
            >
              <el-input v-model="imageAttrs.width" type="number" />
            </el-form-item>
          </el-col>
          <el-col :span="11" :push="2">
            <el-form-item
              :label="
                t('editor.extensions.Image.control.edit_image.form.height')
              "
            >
              <el-input v-model="imageAttrs.height" type="number" />
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button size="small" round @click="closeEditImageDialog">
          {{ t('editor.extensions.Image.control.edit_image.cancel') }}
        </el-button>

        <el-button type="primary" size="small" round @click="updateImageAttrs">
          {{ t('editor.extensions.Image.control.edit_image.confirm') }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { nodeViewProps } from '@tiptap/vue-3';
import {
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElCol,
  ElButton,
} from 'element-plus';
import CommandButton from '../CommandButton.vue';

export default defineComponent({
  components: {
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    ElCol,
    ElButton,
    CommandButton,
  },

  props: {
    node: nodeViewProps['node'],
    updateAttrs: nodeViewProps['updateAttributes'],
  },

  data() {
    return {
      editImageDialogVisible: false,

      imageAttrs: this.getImageAttrs(),
    };
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);

    return { t, enableTooltip };
  },

  methods: {
    syncImageAttrs() {
      this.imageAttrs = this.getImageAttrs();
    },

    getImageAttrs() {
      return {
        src: this.node!.attrs.src,
        alt: this.node!.attrs.alt,
        width: this.node!.attrs.width,
        height: this.node!.attrs.height,
      };
    },

    updateImageAttrs() {
      let { width, height } = this.imageAttrs;

      // input converts it to string
      width = parseInt(width as string, 10);
      height = parseInt(height as string, 10);

      this.updateAttrs!({
        alt: this.imageAttrs.alt,
        width: width >= 0 ? width : null,
        height: height >= 0 ? height : null,
      });

      this.closeEditImageDialog();
    },

    openEditImageDialog() {
      this.editImageDialogVisible = true;
    },

    closeEditImageDialog() {
      this.editImageDialogVisible = false;
    },
  },
});
</script>
