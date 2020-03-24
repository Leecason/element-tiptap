<template>
  <div>
    <command-button
      :command="openEditImageDialog"
      :tooltip="t('editor.extensions.Image.buttons.image_options.tooltip')"
      icon="ellipsis-h"
    />

    <el-dialog
      :title="t('editor.extensions.Image.control.edit_image.title')"
      :visible.sync="editImageDialogVisible"
      :append-to-body="true"
      width="400px"
      custom-class="el-tiptap-edit-image-dialog"
    >
      <el-form
        :model="imageAttrs"
        label-position="top"
        size="small"
      >
        <el-form-item :label="t('editor.extensions.Image.control.edit_image.form.src')">
          <el-input
            :value="imageAttrs.src"
            autocomplete="off"
            disabled
          />
        </el-form-item>

        <el-form-item :label="t('editor.extensions.Image.control.edit_image.form.alt')">
          <el-input
            v-model="imageAttrs.alt"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item>
          <el-col :span="11">
            <el-form-item :label="t('editor.extensions.Image.control.edit_image.form.width')">
              <el-input
                v-model="imageAttrs.width"
                type="number"
              />
            </el-form-item>
          </el-col>
          <el-col
            :span="11"
            :push="2"
          >
            <el-form-item :label="t('editor.extensions.Image.control.edit_image.form.height')">
              <el-input
                v-model="imageAttrs.height"
                type="number"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button
          size="small"
          round
          @click="closeEditImageDialog"
        >
          {{ t('editor.extensions.Image.control.edit_image.cancel') }}
        </el-button>

        <el-button
          type="primary"
          size="small"
          round
          @click="updateImageAttrs"
        >
          {{ t('editor.extensions.Image.control.edit_image.confirm') }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { Dialog, Form, FormItem, Input, Col } from 'element-ui';
import { MenuData } from 'tiptap';
import { ImageNodeAttrs } from '@/extensions/image';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    [Dialog.name]: Dialog,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Col.name]: Col,
    CommandButton,
  },
})
export default class EditImageCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Prop({
    type: Object,
    required: true,
  })
  readonly initImageAttrs!: ImageNodeAttrs;

  editImageDialogVisible = false;

  imageAttrs = {
    ...this.initImageAttrs,
  };

  updateImageAttrs () {
    const attrs: ImageNodeAttrs = {
      ...this.imageAttrs,
    };
    let { width, height } = attrs;

    // Input converts it to string
    // needs to be manually converted to number
    // @ts-ignore
    width = parseInt(width, 10);
    // @ts-ignore
    height = parseInt(height, 10);

    attrs.width = width >= 0 ? width : null;
    attrs.height = height >= 0 ? height : null;

    this.editorContext.commands.update_image(attrs);
    this.closeEditImageDialog();
  }

  private openEditImageDialog () {
    this.editImageDialogVisible = true;
  }

  private closeEditImageDialog () {
    this.editImageDialogVisible = false;
  }
};
</script>
