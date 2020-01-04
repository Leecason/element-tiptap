<template>
  <div>
    <el-popover
      placement="bottom"
      trigger="click"
      class="image-popover"
    >
      <div class="image-popover__menu">
        <div
          class="image-popover__menu__item"
          @click="openUrlPrompt"
        >
          <span>Insert Image By Url</span>
        </div>

        <div
          class="image-popover__menu__item"
          @click="imageUploadDialogVisible = true"
        >
          <span>Upload Image</span>
        </div>
      </div>

      <command-button
        slot="reference"
        tooltip="Image"
        icon="image"
      />
    </el-popover>

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
  name: 'ImageCommandButton',

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

  computed: {
    imageNodeOptions () {
      return this.editorContext.editor.extensions.options.image;
    },
  },

  methods: {
    openUrlPrompt () {
      this.$prompt('', 'Insert image', {
        confirmButtonText: 'Insert',
        cancelButtonText: 'Cancel',
        inputPlaceholder: 'Url of image',
        inputPattern: this.imageNodeOptions.urlPattern,
        inputErrorMessage: 'Please enter the correct url',
        roundButton: true,
      }).then(({ value: url }) => {
        this.editorContext.commands.image({ src: url });
      }).catch(() => {

      });
    },

    async uploadImage (uploadOptions) {
      const { file } = uploadOptions;

      const uploadRequest = this.imageNodeOptions.uploadRequest;
      const url = await (uploadRequest ? uploadRequest(file) : readFileDataUrl(file));

      this.editorContext.commands.image({ src: url });

      this.imageUploadDialogVisible = false;
    },
  },
};
</script>

<style lang="scss">
.image-popover {
  &__menu {
    &__item {
      cursor: pointer;
      padding: 8px 0;

      &:hover {
        color: #409eff;
      }
    }
  }
}

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
