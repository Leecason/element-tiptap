<template>
  <div
    v-if="editor"
    class="el-tiptap-editor"
  >
    <menu-bar
      :editor="editor"
    />

    <editor-content
      :editor="editor"
      class="el-tiptap-editor__content"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap';

import EXTENSION_MAP from '@/extensions';

import MenuBar from './MenuBar/index.vue';

export default {
  name: 'ElTiptap',

  components: {
    MenuBar,
    EditorContent,
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
  },

  data () {
    return {
      editor: null,
    };
  },

  mounted () {
    const extensions = this.generateExtensions();

    this.editor = new Editor({
      useBuiltInExtensions: false,
      extensions,
      content: this.content,
    });
  },

  methods: {
    generateExtensions () {
      const builtInExtensions = ['Doc', 'Text', 'Paragraph'];

      const extensions = builtInExtensions
        .concat(this.extensions)
        .reduce((acc, extension) => {
          const extensionDefinition = Array.isArray(extension) ? extension : [extension];

          const [extensionName, options] = extensionDefinition;
          const extensionClass = EXTENSION_MAP.get(extensionName);

          if (!extensionClass) {
            throw new Error(`Incorrect extension '${extensionName}'`);
          }
          // eslint-disable-next-line new-cap
          const abstractExtension = new extensionClass(options);

          return [
            ...acc,
            abstractExtension,
          ];
        }, []);

      if (this.placeholder) {
        const placeholderExtensionClass = EXTENSION_MAP.get('Placeholder');
        extensions.push(
          // eslint-disable-next-line new-cap
          new placeholderExtensionClass({
            emptyEditorClass: 'el-tiptap-editor--empty',
            emptyNodeClass: 'el-tiptap-editor__placeholder',
            emptyNodeText: this.placeholder,
          })
        );
      }

      return extensions;
    },
  },
};
</script>

<style lang="scss">
.el-tiptap-editor {
  border: 1px solid #EBEEF5;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  display: flex;
  flex-direction: column;

  &__content {
    background-color: #fff;
    flex-grow: 1;
    padding: 5px;
  }

  .ProseMirror {
    margin: 20px;
    outline: 0;

    p {
      line-height: 1;
      margin-top: 16px;
      margin-bottom: 16px;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    ul,
    ol {
      counter-reset: none;
      list-style-type: none;
      margin-left: 24px;
    }

    li > p {
      &::before {
        content: counter(el-tiptap-counter) '.';
        display: inline-block;
        position: relative;
        text-align: right;
        top: 0;
        left: -5px;
        margin-left: -24px;
        width: 24px;
      }
    }

    ul li > p {
      &::before {
        content: '\2022';
        text-align: center;
      }
    }

    ol {
      counter-reset: el-tiptap-counter;

      li > p::before {
        counter-increment: el-tiptap-counter;
      }
    }

    a {
      color: #409EFF;
    }

    blockquote {
      border-left: 5px solid #edf2fc;
      border-radius: 2px;
      color: #606266;
      margin: 20px 0;
      padding-left: 1em;
    }

    pre {
      background-color: #303133;
      color: #d9ecff;
      font-size: 16px;
      overflow-x: auto;
      padding: 14px 20px;
      border-radius: 5px;

      code {
        display: block;
        font-family: 'Menlo,Monaco,Consolas,Courier,monospace';
      }
    }

    .image-view {
      display: inline-block;
      line-height: 0;
      margin: 0 .2rem;
      max-width: 100%;
      position: relative;
      user-select: none;
      vertical-align: baseline;

      &--focused {
        &::before {
          border: 2px solid #b3d8ff;;
          bottom: 0;
          content: '';
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }

    ul[data-type=todo_list] {
      margin-left: 5px;

      .todo-item {
        display: flex;
        flex-direction: row;
        margin-bottom: 0;

        .todo-checkbox {
          color: #dcdfe6;
          cursor: pointer;
          display: inline-flex;
          font-size: 18px;
          margin-top: 14px;
        }

        .todo-content {
          padding-left: 10px;

          > p {
            font-size: 16px;
          }
        }

        &--done {
          > .todo-checkbox {
            color: #409EFF;
          }

          > .todo-content > p {
            color: #409EFF;
            text-decoration: line-through;
          }
        }
      }
    }

    hr {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    *[data-text-align=right] {
      text-align: right!important;
    }

    *[data-text-align=center] {
      text-align: center!important;
    }

    *[data-text-align=justify] {
      text-align: justify!important;
    }

    @for $i from 1 through 7 /* max-indent */ {
      $indent-margin-base: 30px;

      *[data-indent="#{$i}"] {
        margin-left: $indent-margin-base * $i!important;
      }
    }
  }

  &__placeholder {
    font-size: 16px;
    pointer-events: none;

    &.el-tiptap-editor--empty:first-child::before {
      color: #c0c4cc;
      content: attr(data-empty-text);
      float: left;
      height: 0;
      pointer-events: none;
    }
  }
}
</style>
