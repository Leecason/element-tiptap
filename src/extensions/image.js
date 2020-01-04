import { Image as TiptapImage } from 'tiptap-extensions';
import { NodeSelection } from 'prosemirror-state';
import ImageCommandButton from '../components/MenuCommands/ImageCommandButton.vue';

const IMAGE_URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
export default class Image extends TiptapImage {
  get defaultOptions () {
    return {
      urlPattern: IMAGE_URL_REGEX,
      uploadRequest: null,
    };
  }

  get schema () {
    return {
      inline: true,
      attrs: {
        src: {
          default: '',
        },
        alt: {
          default: '',
        },
        title: {
          default: '',
        },
        width: {
          default: null,
        },
        height: {
          default: null,
        },
      },
      group: 'inline',
      draggable: true,
      parseDOM: [{
        tag: 'img[src]',
        getAttrs: dom => {
          const width = dom.getAttribute('width') || dom.style.width;
          const height = dom.getAttribute('height') || dom.style.height;

          return {
            src: dom.getAttribute('src'),
            title: dom.getAttribute('title'),
            alt: dom.getAttribute('alt'),
            width: parseInt(width, 10),
            height: parseInt(height, 10),
          };
        },
      } ],
      toDOM: node => ['img', node.attrs],
    };
  }

  get view () {
    return {
      name: 'ImageView',

      template: `
        <span
          :class="{ 'image-view--focused': selected }"
          class="image-view"
          @click="handleImageViewClick"
        >
          <img
            :src="node.attrs.src"
            :title="node.attrs.title"
            :alt="node.attrs.alt"
            :width="node.attrs.width"
            :height="node.attrs.height"
          >
        </span>
      `,

      props: ['node', 'view', 'getPos', 'selected'],

      methods: {
        // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541
        handleImageViewClick () {
          let tr = this.view.state.tr;
          const pos = this.getPos();
          let pos1 = this.view.state.doc.resolve(pos);
          let selection = new NodeSelection(pos1);
          tr.setSelection(selection);
          this.view.dispatch(tr);
        },
      },
    };
  }

  menuBtnView (editorContext) {
    return {
      component: ImageCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
