import { Node, mergeAttributes } from '@tiptap/core';
import { Editor, VueNodeViewRenderer } from '@tiptap/vue-3';
import IframeCommandButton from '@/components/MenuCommands/IframeCommandButton.vue';
import IframeView from '@/components/ExtensionViews/IframeView.vue';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    iframe: {
      setIframe: (options: { src: string }) => ReturnType;
    };
  }
}

const Iframe = Node.create({
  name: 'iframe',

  // schema
  group: 'block',
  selectable: false,

  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null,
        parseHTML: (element) => {
          const src = element.getAttribute('src');
          return src;
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'iframe',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'iframe',
      mergeAttributes(HTMLAttributes, {
        frameborder: 0,
        allowfullscreen: 'true',
      }),
    ];
  },

  addCommands() {
    return {
      setIframe:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  addOptions() {
    return {
      button({ editor }: { editor: Editor }) {
        return {
          component: IframeCommandButton,
          componentProps: {
            editor,
          },
        };
      },
    };
  },

  addNodeView() {
    return VueNodeViewRenderer(IframeView);
  },
});

export default Iframe;
