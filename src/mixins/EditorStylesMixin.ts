import { Component, Vue, Prop } from 'vue-property-decorator';
import { isNaN } from '@/utils/shared';

const DEFAULT_EDITOR_SIZE_UNIT = 'px';

@Component
export default class EditorStylesMixin extends Vue {
  @Prop({
    type: [String, Number],
    default: undefined,
  })
  readonly width!: string | number;

  @Prop({
    type: [String, Number],
    default: undefined,
  })
  readonly height!: string | number;

  @Prop({
    type: Boolean,
    default: true,
  })
  readonly showMenubar!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  readonly charCounterCount!: boolean;

  get elTiptapEditorStyle() {
    return [
      this.editorSizeStyle,
    ];
  }

  get editorSizeStyle() {
    let { width, height } = this;

    width = isNaN(Number(width)) ? width : `${width}${DEFAULT_EDITOR_SIZE_UNIT}`;
    height = isNaN(Number(height)) ? height : `${height}${DEFAULT_EDITOR_SIZE_UNIT}`;

    return {
      width,
      height,
    };
  }
};
