<template>
  <div>
    <command-button
      :command="openEditLinkDialog"
      :enable-tooltip="et.tooltip"
      :tooltip="t('editor.extensions.Link.edit.tooltip')"
      icon="edit"
    />

    <el-dialog
      :title="t('editor.extensions.Link.edit.control.title')"
      :visible.sync="editLinkDialogVisible"
      :append-to-body="true"
      width="400px"
      custom-class="el-tiptap-edit-link-dialog"
    >
      <el-form
        :model="linkAttrs"
        label-position="right"
        size="small"
      >
        <el-form-item
          :label="t('editor.extensions.Link.edit.control.href')"
          prop="href"
        >
          <el-input
            v-model="linkAttrs.href"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item prop="openInNewTab">
          <el-checkbox v-model="linkAttrs.openInNewTab">
            {{ t('editor.extensions.Link.edit.control.open_in_new_tab') }}
          </el-checkbox>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button
          size="small"
          round
          @click="closeEditLinkDialog"
        >
          {{ t('editor.extensions.Image.control.edit_image.cancel') }}
        </el-button>

        <el-button
          type="primary"
          size="small"
          round
          @mousedown.prevent
          @click="updateLinkAttrs"
        >
          {{ t('editor.extensions.Image.control.edit_image.confirm') }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Inject } from 'vue-property-decorator';
import { Dialog, Form, FormItem, Input, Checkbox } from 'element-ui';
import { MenuData } from 'tiptap';
import i18nMixin from '@/mixins/i18nMixin';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    [Dialog.name]: Dialog,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Checkbox.name]: Checkbox,
    CommandButton,
  },
})
export default class EditLinkCommandButton extends Mixins(i18nMixin) {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Prop({
    type: Object,
    required: true,
  })
  readonly initLinkAttrs!: object;

  @Inject() readonly et!: any;

  linkAttrs = this.initLinkAttrs;
  editLinkDialogVisible = false;

  private updateLinkAttrs () {
    this.editorContext.commands.link(this.linkAttrs);

    this.closeEditLinkDialog();
  }

  private openEditLinkDialog () {
    this.editLinkDialogVisible = true;
  }

  private closeEditLinkDialog () {
    this.editLinkDialogVisible = false;
  }
};
</script>
