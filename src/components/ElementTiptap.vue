<template>
  <div
    v-if="editor"
    :style="elTiptapEditorStyle"
    :class="[{
      'el-tiptap-editor': true,
      'el-tiptap-editor--fullscreen': isFullscreen,
    }, editorClass]"
  >
    <menu-bubble
      :editor="editor"
      :menuBubbleOptions="menuBubbleOptions"
      :class="editorBubbleMenuClass"
    />

    <menu-bar
      v-if="showMenubar"
      :editor="editor"
      :class="[{
        'border-top-radius': showMenubar,
      }, editorMenubarClass]"
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

    <div
      v-if="isCodeViewMode"
      :class="{
        'el-tiptap-editor__codemirror': true,
        'border-bottom-radius': isCodeViewMode,
      }"
    >
      <textarea ref="cmTextArea"></textarea>
    </div>

    <!-- use v-show to keep history -->
    <editor-content
      v-show="!isCodeViewMode"
      :editor="editor"
      :class="[{
        'el-tiptap-editor__content': true,
        'border-top-radius': !showMenubar,
        'border-bottom-radius': !showFooter,
      }, editorContentClass]"
    />

    <slot
      name="footer"
      :editor="editor"
    >
      <div
        v-if="showFooter"
        :class="[{
          'el-tiptap-editor__footer': true,
          'border-bottom-radius': showFooter,
        }, editorFooterClass]"
      >
        <span class="el-tiptap-editor__characters">
          {{ t('editor.characters') }}: {{ characters }}
        </span>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Provide, Model, Mixins } from 'vue-property-decorator';
import { Editor, EditorContent, Extension, EditorUpdateEvent } from 'tiptap';
import { Placeholder } from 'tiptap-extensions';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import ContentAttributes from '@/extensions/content_attributes';
import Title from '@/extensions/title';
import { capitalize } from '@/utils/shared';
import { EVENTS } from '@/constants';
import EditorStylesMixin from '@/mixins/EditorStylesMixin';
import CodeViewMixin from '@/mixins/CodeViewMixin';
import { Trans } from '@/i18n';

import MenuBar from './MenuBar/index.vue';
import MenuBubble from './MenuBubble/index.vue';

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
export default class ElTiptap extends Mixins(EditorStylesMixin, CodeViewMixin) {
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
    validator(output): boolean {
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

  @Prop({
    type: Boolean,
    default: true,
  })
  readonly tooltip!: boolean;

  @Prop({
    type: String,
    default: undefined,
    validator: (lang) => {
      return Trans.isLangSupported(lang);
    },
  })
  readonly lang!: string;

  @Prop({
    type: [String, Array, Object],
    default: undefined,
  })
  readonly editorClass!: string | any[] | object;

  @Prop({
    type: [String, Array, Object],
    default: undefined,
  })
  readonly editorContentClass!: string | any[] | object;

  @Prop({
    type: [String, Array, Object],
    default: undefined,
  })
  readonly editorMenubarClass!: string | any[] | object;

  @Prop({
    type: [String, Array, Object],
    default: undefined,
  })
  readonly editorBubbleMenuClass!: string | any[] | object;

  @Prop({
    type: [String, Array, Object],
    default: undefined,
  })
  readonly editorFooterClass!: string | any[] | object;

  // TODO: popper.js
  @Prop({
    type: Object,
    default: () => ({}),
  })
  readonly menuBubbleOptions!: Object;

  editor: Editor | null = null;
  emitAfterOnUpdate: boolean = false;
  isFullscreen: boolean = false;

  @Provide() get et(): ElTiptap {
    return this;
  };

  get characters(): number {
    if (!this.editor) return 0;

    return this.editor.state.doc.textContent.length;
  }

  get showFooter(): boolean {
    return this.charCounterCount && !this.isCodeViewMode;
  }

  get spellcheckEnabled(): boolean {
    return this.spellcheck == null
      ? this.$elementTiptapPlugin
        ? this.$elementTiptapPlugin.spellcheck
        : true
      : this.spellcheck;
  }

  get i18nHandler(): Function {
    const lang = this.lang || this.$elementTiptapPlugin.lang;
    return Trans.buildI18nHandler(lang);
  }

  @Watch('content')
  onContentChange(val: string): void {
    if (this.emitAfterOnUpdate) {
      this.emitAfterOnUpdate = false;
      return;
    }

    if (this.editor) this.editor.setContent(val);
  }

  @Watch('readonly')
  onReadonlyChange(): void {
    if (this.editor) {
      this.editor.setOptions({
        editable: !this.readonly,
      });
    }
  }

  private mounted() {
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

  private beforeDestroy() {
    if (this.editor) this.editor.destroy();
  }

  private generateExtensions(): Array<Extension> {
    const extensions: Extension[] = [...this.extensions];

    // spellcheck
    extensions.push(
      new ContentAttributes({
        spellcheck: this.spellcheckEnabled,
      }),
    );

    // placeholder
    extensions.push(this.initPlaceholderExtension());

    return extensions;
  }

  emitEvent(event: EVENTS) {
    this.$emit(this.genEvent(event), {
      editor: this.editor,
    });
  }

  onUpdate(options: EditorUpdateEvent) {
    this.emitAfterOnUpdate = true;

    let output;
    if (this.output === 'html') {
      output = options.getHTML();
    } else {
      output = JSON.stringify(options.getJSON());
    }

    this.$emit(this.genEvent(EVENTS.UPDATE), output, options);
  }

  // i18n
  t(...args: any[]): string {
    return this.i18nHandler.apply(this, args);
  }

  private genEvent(event: EVENTS) {
    return `on${capitalize(event)}`;
  }

  private getTitleExtension(): Title | null {
    const doc = this.extensions.find(e => e.name === 'doc');
    if (doc.options.title) {
      const title = this.extensions.find(e => e.name === 'title');
      if (title) return title;
    }
    return null;
  }

  private initPlaceholderExtension(): Placeholder {
    const title = this.getTitleExtension();
    if (title) {
      // @ts-ignore
      return new Placeholder({
        emptyEditorClass: 'el-tiptap-editor--empty',
        emptyNodeClass: 'el-tiptap-editor__with-title-placeholder',
        showOnlyCurrent: false,
        // @ts-ignore
        emptyNodeText: (node: ProsemirrorNode) => {
          if (node.type.name === 'title') {
            return title.options.placeholder;
          }
          return this.placeholder;
        },
      });
    }
    return new Placeholder({
      emptyEditorClass: 'el-tiptap-editor--empty',
      emptyNodeClass: 'el-tiptap-editor__placeholder',
      emptyNodeText: this.placeholder,
    });
  }
};
</script>

<style lang="scss">
@import '../styles/editor.scss';
@import '../styles/command_button.scss';
</style>
