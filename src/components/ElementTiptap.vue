<template>
  <div
    v-if="editor"
    :style="elTiptapEditorStyle"
    :class="{ 'el-tiptap-editor--fullscreen': isFullscreen }"
    class="el-tiptap-editor"
  >
    <menu-bubble
      :editor="editor"
    />

    <menu-bar
      v-if="showMenubar"
      :editor="editor"
    >
      <template
        v-if="$scopedSlots.menubar"
        v-slot="slotProps"
      >
        <slot
          name="menubar"
          v-bind="slotProps"
        />
      </template>
    </menu-bar>

    <editor-content
      :editor="editor"
      class="el-tiptap-editor__content"
    />

    <slot
      name="footer"
      :editor="editor"
    >
      <div
        v-if="charCounterCount"
        class="el-tiptap-editor__footer"
      >
        <span class="el-tiptap-editor__characters">
          {{ t('editor.characters') }}: {{ characters }}
        </span>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Provide, ProvideReactive, Model, Mixins } from 'vue-property-decorator';
import { Editor, EditorContent, Extension, EditorUpdateEvent } from 'tiptap';
import { Placeholder } from 'tiptap-extensions';
import ContentAttributes from '@/extensions/content_attributes';
import Title from '@/extensions/title';
import { capitalize } from '@/utils/shared';
import { EVENTS } from '@/constants';
import EditorStylesMixin from '@/mixins/EditorStylesMixin';
import i18nMixin from '@/mixins/i18nMixin';

import MenuBar from './MenuBar/index.vue';
import MenuBubble from './MenuBubble/index.vue';
import Logger from '../utils/logger';

const COMMON_EMIT_EVENTS: EVENTS[] = [
  EVENTS.TRANSACTION,
  EVENTS.FOCUS,
  EVENTS.BLUR,
  EVENTS.PASTE,
  EVENTS.DROP,
];

@Component({
  components: {
    MenuBar,
    MenuBubble,
    EditorContent,
  },
  // fix @ProvideReactive
  // https://github.com/kaorun343/vue-property-decorator/issues/277#issuecomment-558594655
  inject: [],
})
export default class ElTiptap extends Mixins(EditorStylesMixin, i18nMixin) {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly extensions!: any[];

  @Model('onUpdate', {
    type: String,
    default: '',
  })
  readonly content!: string;

  @Prop({
    type: String,
    default: '',
  })
  readonly placeholder!: string;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  readonly editorProperties!: Object;

  @Prop({
    type: String,
    default: 'html',
    validator (output): boolean {
      return ['html', 'json'].includes(output);
    },
  })
  readonly output!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  readonly readonly!: boolean;

  @Prop({
    type: Boolean,
    default: undefined,
  })
  readonly spellcheck!: boolean | undefined;

  editor: Editor | null = null;
  emitAfterOnUpdate: boolean = false;

  get characters (): number {
    if (!this.editor) return 0;

    return this.editor.state.doc.textContent.length;
  }

  @Watch('content')
  onContentChange (val: string): void {
    if (this.emitAfterOnUpdate) {
      this.emitAfterOnUpdate = false;
      return;
    }

    if (this.editor) this.editor.setContent(val);
  }

  @Watch('readonly')
  onReadonlyChange (): void {
    if (this.editor) {
      this.editor.setOptions({
        editable: !this.readonly,
      });
    }
  }

  private mounted () {
    const extensions = this.generateExtensions();

    const eventOptions = COMMON_EMIT_EVENTS.reduce((prev, event) => {
      return {
        ...prev,
        [`on${capitalize(event)}`]: () => this.emitEvent.bind(this)(event),
      };
    }, {});

    this.editor = new Editor({
      ...this.editorProperties,
      editable: !this.readonly,
      useBuiltInExtensions: false,
      extensions,
      ...eventOptions,
      content: this.content,
      onUpdate: this.onUpdate.bind(this),
    });

    this.$emit(this.genEvent(EVENTS.INIT), {
      editor: this.editor,
    });
  }

  private beforeDestroy () {
    if (this.editor) this.editor.destroy();
  }

  private generateExtensions (): Array<Extension> {
    const extensions: Extension[] = [...this.extensions];

    // spellcheck
    const spellcheck = this.spellcheck == null
      ? this.$elementTiptapPlugin
        ? this.$elementTiptapPlugin.spellcheck
        : true
      : this.spellcheck;

    extensions.push(
      new ContentAttributes({
        spellcheck,
      }),
    );

    // has title
    const doc = this.extensions[0];
    if (doc.name !== 'doc') {
      Logger.warn('\'Doc\' shuold be the first extension');
    }
    if (doc.options.title) {
      extensions.push(new Title());
    }

    // placeholder
    if (this.placeholder) {
      extensions.push(
        new Placeholder({
          emptyEditorClass: 'el-tiptap-editor--empty',
          emptyNodeClass: 'el-tiptap-editor__placeholder',
          emptyNodeText: this.placeholder,
        })
      );
    }

    return extensions;
  }

  emitEvent (event: EVENTS) {
    this.$emit(this.genEvent(event), {
      editor: this.editor,
    });
  }

  onUpdate (options: EditorUpdateEvent) {
    this.emitAfterOnUpdate = true;

    let output;
    if (this.output === 'html') {
      output = options.getHTML();
    } else {
      output = JSON.stringify(options.getJSON());
    }

    this.$emit(this.genEvent(EVENTS.UPDATE), output, options);
  }

  // TODO: provide to fullscreen command button, need to be optimized
  @ProvideReactive() isFullscreen = false;
  @Provide() toggleFullscreen () {
    this.isFullscreen = !this.isFullscreen;
  }

  private genEvent (event: EVENTS) {
    return `on${capitalize(event)}`;
  }
};
</script>

<style lang="scss">
@import '../styles/editor.scss';
@import '../styles/command_button.scss';
</style>
