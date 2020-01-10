<template>
  <div
    v-if="editor"
    class="el-tiptap-editor"
  >
    <menu-bubble
      v-if="bubbleMenuVisible"
      :editor="editor"
    >
      <template
        v-if="$scopedSlots.menububble"
        v-slot="slotProps"
      >
        <slot
          name="menububble"
          v-bind="slotProps"
        />
      </template>
    </menu-bubble>

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

    <slot name="footer" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap';

import { Placeholder } from '../extensions';
import { capitalize } from '../utils/shared';

import MenuBar from './MenuBar/index.vue';
import MenuBubble from './MenuBubble/index.vue';

const COMMON_EMIT_EVENTS = [
  'transaction',
  'focus',
  'blur',
  'paste',
  'drop',
];

export default {
  name: 'ElTiptap',

  components: {
    MenuBar,
    MenuBubble,
    EditorContent,
  },

  model: {
    prop: 'content',
    event: 'onUpdate',
  },

  props: {
    extensions: {
      type: Array,
      default: () => [],
    },

    content: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    output: {
      type: String,
      default: 'html',
      validator (output) {
        return ['html', 'json'].includes(output);
      },
    },

    readonly: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      editor: null,
    };
  },

  computed: {
    bubbleMenuVisible () {
      const extensionManager = this.editor.extensions;
      return extensionManager.extensions.some(extension => {
        return extension.options.bubble;
      });
    },
  },

  watch: {
    content (val) {
      if (this.emitAfterOnUpdate) {
        this.emitAfterOnUpdate = false;
        return;
      }

      if (this.editor) this.editor.setContent(val);
    },

    readonly () {
      this.editor.setOptions({
        editable: !this.readonly,
      });
    },
  },

  mounted () {
    const extensions = this.generateExtensions();

    const eventOptions = COMMON_EMIT_EVENTS.reduce((eventOptions, event) => {
      return {
        ...eventOptions,
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

    this.$emit('onInit', {
      editor: this.editor,
    });
  },

  beforeDestroy () {
    if (this.editor) this.editor.destroy();
  },

  methods: {
    generateExtensions () {
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
    },

    emitEvent (event) {
      this.$emit(`on${capitalize(event)}`, {
        editor: this.editor,
      });
    },

    onUpdate (options) {
      this.emitAfterOnUpdate = true;

      let output;
      if (this.output === 'html') {
        output = options.getHTML();
      } else {
        output = JSON.stringify(options.getJSON());
      }

      this.$emit('onUpdate', output, options);
    },
  },
};
</script>

<style lang="scss">
@import '../styles/editor.scss';
</style>
