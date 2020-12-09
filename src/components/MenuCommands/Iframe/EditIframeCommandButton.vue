<template>
  <div>
    <command-button
      :command="openEditIframeDialog"
      :enable-tooltip="et.tooltip"
      :tooltip="et.t('editor.extensions.Iframe.buttons.iframe_options.tooltip')"
      icon="cog"
    />

    <el-dialog
      :title="et.t('editor.extensions.Iframe.control.edit_iframe.title')"
      :visible.sync="editIframeDialogVisible"
      :append-to-body="true"
      width="400px"
      custom-class="el-tiptap-edit-iframe-dialog"
      @open="syncIframeAttrs"
    >
      <el-form
        :model="iframeAttrs"
        label-position="top"
        size="small"
      >
        <el-form-item :label="et.t('editor.extensions.Iframe.control.edit_iframe.form.src')">
          <el-input
            v-model="iframeAttrs.src"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item>
          <el-col :span="11">
            <el-form-item :label="et.t('editor.extensions.Iframe.control.edit_iframe.form.width')">
              <el-input
                v-model="iframeAttrs.width"
                type="number"
              />
            </el-form-item>
          </el-col>
          <el-col
            :span="11"
            :push="2"
          >
            <el-form-item :label="et.t('editor.extensions.Iframe.control.edit_iframe.form.height')">
              <el-input
                v-model="iframeAttrs.height"
                type="number"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button
          size="small"
          @click="closeEditIframeDialog"
        >
          {{ et.t('editor.extensions.Iframe.control.edit_iframe.cancel') }}
        </el-button>

        <el-button
          type="primary"
          size="small"
          @click="updateIframeAttrs"
        >
          {{ et.t('editor.extensions.Iframe.control.edit_iframe.confirm') }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { Dialog, Form, FormItem, Input, Col, Button } from 'element-ui';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import CommandButton from '../CommandButton.vue';

@Component({
  components: {
    [Dialog.name]: Dialog,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Col.name]: Col,
    [Button.name]: Button,
    CommandButton,
  },
})
export default class EditIframeCommandButton extends Vue {
  @Prop({
    type: ProsemirrorNode,
    required: true,
  })
  readonly node!: ProsemirrorNode;

  @Prop({
    type: Function,
    required: true,
  })
  readonly updateAttrs!: Function;

  @Inject() readonly et!: any;

  editIframeDialogVisible = false;

  iframeAttrs = this.getIframeAttrs();

  private syncIframeAttrs () {
    this.iframeAttrs = this.getIframeAttrs();
  }

  private getIframeAttrs () {
    return {
      src: this.node.attrs.src,
      width: this.node.attrs.width,
      height: this.node.attrs.height,
    };
  }

  private updateIframeAttrs () {
    let { src, width, height } = this.iframeAttrs;

    // input converts it to string
    width = parseInt(width as string, 10);
    height = parseInt(height as string, 10);

    this.updateAttrs({
      src: src,
      width: width >= 0 ? width : null,
      height: height >= 0 ? height : null,
    });

    this.closeEditIframeDialog();
  }

  private openEditIframeDialog () {
    this.editIframeDialogVisible = true;
  }

  private closeEditIframeDialog () {
    this.editIframeDialogVisible = false;
  }
};
</script>
