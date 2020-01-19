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
          <span>{{ $i18n('editor.extensions.Image.buttons.insert_by_url') }}</span>
        </div>

        <div
          class="image-popover__menu__item"
          @click="imageUploadDialogVisible = true"
        >
          <span>{{ $i18n('editor.extensions.Image.buttons.upload_image') }}</span>
        </div>
      </div>

      <command-button
        slot="reference"
        :tooltip="$i18n('editor.extensions.Image.tooltip')"
        icon="image"
      />
    </el-popover>

    <el-dialog
      :title="$i18n('editor.extensions.Image.control.upload_image.title')"
      :visible.sync="imageUploadDialogVisible"
    >
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
          {{ $i18n('editor.extensions.Image.control.upload_image.button') }}
        </div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import { readFileDataUrl } from '../../utils/shared';
import CommandButton from './CommandButton';
import i18nMixin from '../../mixins/i18nMixin';

export default {
  name: 'ImageCommandButton',

  components: {
    CommandButton,
  },

  mixins: [i18nMixin],

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
      this.$prompt('', this.$i18n('editor.extensions.Image.control.insert_by_url.title'), {
        confirmButtonText: this.$i18n('editor.extensions.Image.control.insert_by_url.confirm'),
        cancelButtonText: this.$i18n('editor.extensions.Image.control.insert_by_url.cancel'),
        inputPlaceholder: this.$i18n('editor.extensions.Image.control.insert_by_url.placeholder'),
        inputPattern: this.imageNodeOptions.urlPattern,
        inputErrorMessage: this.$i18n('editor.extensions.Image.control.insert_by_url.invalid_url'),
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
