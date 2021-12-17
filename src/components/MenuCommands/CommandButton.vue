<template>
  <el-tooltip
    :content="tooltip"
    :open-delay="350"
    :disabled="!enableTooltip || readonly"
    transition="el-zoom-in-bottom"
    effect="dark"
    placement="top"
  >
    <div
      :class="commandButtonClass"
      @mousedown.prevent
      @click="onClick"
    >
      <v-icon :name="icon"/>
    </div>
  </el-tooltip>
</template>

<script lang="ts">
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/heading';
import 'vue-awesome/icons/font';
import 'vue-awesome/icons/tint';
import 'vue-awesome/icons/highlighter';
import 'vue-awesome/icons/bold';
import 'vue-awesome/icons/underline';
import 'vue-awesome/icons/italic';
import 'vue-awesome/icons/strikethrough';
import 'vue-awesome/icons/link';
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/unlink';
import 'vue-awesome/icons/external-link-alt';
import 'vue-awesome/icons/image';
import 'vue-awesome/icons/regular/image';
import 'vue-awesome/icons/ellipsis-h';
import 'vue-awesome/icons/regular/trash-alt';
import 'vue-awesome/icons/video';
import 'vue-awesome/icons/code';
import 'vue-awesome/icons/quote-right';
import 'vue-awesome/icons/align-left';
import 'vue-awesome/icons/align-center';
import 'vue-awesome/icons/align-right';
import 'vue-awesome/icons/align-justify';
import 'vue-awesome/icons/text-width';
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
import 'vue-awesome/icons/expand';
import 'vue-awesome/icons/compress';
import 'vue-awesome/icons/print';
import 'vue-awesome/icons/eye';
import 'vue-awesome/icons/regular/object-group';
import 'vue-awesome/icons/regular/file-code';
import 'vue-awesome/icons/arrow-left';

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Tooltip } from 'element-ui';
import { noop } from '@/utils/shared';

@Component({
  components: {
    'v-icon': Icon,
    [Tooltip.name]: Tooltip,
  },
})
export default class CommandButton extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly icon!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  readonly isActive!: boolean;

  @Prop({
    type: String,
    required: true,
  })
  readonly tooltip!: string;

  @Prop({
    type: Boolean,
    required: true,
  })
  readonly enableTooltip!: boolean;

  @Prop({
    type: Function,
    default: noop,
  })
  readonly command!: Function;

  @Prop({
    type: Boolean,
    default: false,
  })
  readonly readonly!: boolean;

  private get commandButtonClass(): object {
    return {
      'el-tiptap-editor__command-button': true,
      'el-tiptap-editor__command-button--active': this.isActive,
      'el-tiptap-editor__command-button--readonly': this.readonly,
    };
  }

  onClick() {
    if (!this.readonly) this.command();
  }
}
</script>
