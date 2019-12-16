<template>
  <div>
    <command-button
      tooltip="Image"
      icon="image"
      @click.native="imageUploadDialogVisible = true"
    />

    <el-dialog title="Upload image" :visible.sync="imageUploadDialogVisible">
      <el-upload
        :http-request="uploadImage"
        :show-file-list="false"
        class="image-upload"
        action="#"
        drag
        accept="image/*"
      >
        <div class="image-upload__icon">
          <i class="fa fa-upload" />
        </div>
        <div class="el-upload__text">
          Choose an image file or drag it here
        </div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import { readFileDataUrl } from '../../utils/shared';

import CommandButton from './CommandButton';

export default {
  name: 'ImageUploadCommandButton',

  components: {
    CommandButton,
  },

  props: {
    editorContext: {
      type: Object,
      required: true,
    },
  },

  data () {
    return {
      imageUploadDialogVisible: false,
    };
  },

  methods: {
    async uploadImage (uploadOptions) {
      const { file } = uploadOptions;

      const httpRequest = this.editorContext.editor.extensions.options.image.httpRequest;
      const url = await (httpRequest ? httpRequest(file) : readFileDataUrl(file));

      this.editorContext.commands.image({ src: url });

      this.imageUploadDialogVisible = false;
    },
  },
};
</script>

<style lang="scss">
.el-upload {
  display: flex;
  width: 100%;

  .el-upload-dragger {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    height: 300px;
    width: auto;

    .image-upload__icon {
      font-size: 50px;
      margin-bottom: 10px;
    }

    &:hover {
      .image-upload__icon {
        color: #409EFF;
      }
    }
  }
}
</style>
