<template>
  <div>
    <command-button
      :is-active="editorContext.isActive.link()"
      :readonly="et.isCodeViewMode"
      :command="openAddLinkDialog"
      :enable-tooltip="et.tooltip"
      :tooltip="et.t('editor.extensions.Link.add.tooltip')"
      icon="link"
    />

    <el-dialog
      :title="et.t('editor.extensions.Link.add.control.title')"
      :visible.sync="addLinkDialogVisible"
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
          :label="et.t('editor.extensions.Link.add.control.href')"
          prop="href"
        >
          <el-input
            v-model="linkAttrs.href"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item prop="openInNewTab">
          <el-checkbox v-model="linkAttrs.openInNewTab">
            {{ et.t('editor.extensions.Link.add.control.open_in_new_tab') }}
          </el-checkbox>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button
          size="small"
          round
          @click="closeAddLinkDialog"
        >
          {{ et.t('editor.extensions.Link.add.control.cancel') }}
        </el-button>

        <el-button
          type="primary"
          size="small"
          round
          @mousedown.prevent
          @click="addLink"
        >
          {{ et.t('editor.extensions.Link.add.control.confirm') }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue, Watch } from 'vue-property-decorator';
import { Dialog, Form, FormItem, Input, Checkbox, Button } from 'element-ui';
import { MenuData } from 'tiptap';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    [Dialog.name]: Dialog,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    CommandButton,
  },
})
export default class AddLinkCommandButton extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly editorContext!: MenuData;

  @Inject() readonly et!: any;

  linkAttrs = {};

  addLinkDialogVisible = false;

  @Watch('addLinkDialogVisible', { immediate: true })
  onDialogVisibleChange() {
    this.linkAttrs = { href: '', openInNewTab: true };
  }

  private addLink() {
    this.editorContext.commands.link(this.linkAttrs);

    this.closeAddLinkDialog();
  }

  private openAddLinkDialog() {
    this.addLinkDialogVisible = true;
  }

  private closeAddLinkDialog() {
    this.addLinkDialogVisible = false;
  }
};
</script>
