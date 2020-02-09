<template>
  <el-tooltip
    :content="tooltip"
    :open-delay="350"
    effect="dark"
    placement="top"
  >
    <div
      :class="commandButtonClass"
      @mousedown.prevent
      @click="command"
    >
      <v-icon :name="icon"/>
    </div>
  </el-tooltip>
</template>

<script lang="ts">
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

import { Component, Prop, Vue } from 'vue-property-decorator';

import { noop } from '../../utils/shared';

@Component
export default class CommandButton extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  icon!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  isActive!: boolean;

  @Prop({
    type: String,
    required: true,
  })
  tooltip!: string;

  @Prop({
    type: Function,
    default: noop,
  })
  command!: Function;

  get commandButtonClass (): object {
    return {
      'el-tiptap-editor__command-button': true,
      'el-tiptap-editor__command-button--active': this.isActive,
    };
  }
}
</script>
