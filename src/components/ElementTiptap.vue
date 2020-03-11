<template>
  <div
    v-if="editor"
    class="el-tiptap-editor"
  >
    <menu-bubble
      :editor="editor"
    />

    <menu-bar
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
      <div class="el-tiptap-editor__footer">
        Characters: {{ characters }}
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Model, Vue } from 'vue-property-decorator';
import { Editor, EditorContent, Extension, EditorUpdateEvent } from 'tiptap';

import { Placeholder } from '@/extensions';
import { capitalize } from '@/utils/shared';
import { EVENTS } from '@/constants';

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
})
export default class ElTiptap extends Vue {
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

  editor: Editor | null = null;
  emitAfterOnUpdate: boolean = false;

  private get bubbleMenuVisible (): boolean {
    if (!this.editor) return false;

    const extensionManager = this.editor.extensions;
    return extensionManager.extensions.some(extension => {
      return extension.options.bubble;
    });
  }

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
      editable: !this.readonly,
      useBuiltInExtensions: false,
      extensions,
      content: this.content,
      ...eventOptions,
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
    const extensions = this.extensions;

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

  private genEvent (event: EVENTS) {
    return `on${capitalize(event)}`;
  }
};
</script>

<style lang="scss">
@import '../styles/editor.scss';
@import '../styles/command_button.scss';
</style>
