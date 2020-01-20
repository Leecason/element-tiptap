<template>
  <el-tooltip
    :content="i18nTooltip"
    :open-delay="350"
    effect="dark"
    placement="top"
  >
    <div
      :class="classes"
      @mousedown.prevent
      @click="command"
    >
      <v-icon :name="icon"/>
    </div>
  </el-tooltip>
</template>

<script>
import 'vue-awesome/icons/heading';
import 'vue-awesome/icons/font';
import 'vue-awesome/icons/highlighter';
import 'vue-awesome/icons/bold';
import 'vue-awesome/icons/underline';
import 'vue-awesome/icons/italic';
import 'vue-awesome/icons/strikethrough';
import 'vue-awesome/icons/link';
import 'vue-awesome/icons/image';
import 'vue-awesome/icons/video';
import 'vue-awesome/icons/code';
import 'vue-awesome/icons/quote-right';
import 'vue-awesome/icons/align-left';
import 'vue-awesome/icons/align-center';
import 'vue-awesome/icons/align-right';
import 'vue-awesome/icons/align-justify';
import 'vue-awesome/icons/text-height';
import 'vue-awesome/icons/list-ul';
import 'vue-awesome/icons/list-ol';
import 'vue-awesome/icons/tasks';
import 'vue-awesome/icons/indent';
import 'vue-awesome/icons/outdent';
import 'vue-awesome/icons/minus';
import 'vue-awesome/icons/table';
import 'vue-awesome/icons/remove-format';
import 'vue-awesome/icons/undo';
import 'vue-awesome/icons/redo';

import { noop } from '../../utils/shared';
import i18nMixin from '../../mixins/i18nMixin';

export default {
  name: 'CommandButton',
  mixins: [i18nMixin],
  props: {
    icon: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    tooltip: {
      type: String,
      required: true,
    },

    command: {
      type: Function,
      default: noop,
    },
  },

  computed: {
    i18nTooltip () {
      return this.i18n(`controls.${this.tooltip}`);
    },
    classes () {
      return {
        'el-tiptap-editor__command-button': true,
        'el-tiptap-editor__command-button--active': this.isActive,
      };
    }
  },
};
</script>
