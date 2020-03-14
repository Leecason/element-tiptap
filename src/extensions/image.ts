// @ts-nocheck
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { Image as TiptapImage } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import ImageCommandButton from '@/components/MenuCommands/ImageCommandButton.vue';
import ImageView from '@/components/ExtensionViews/ImageView.vue';

const IMAGE_URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

// @ts-ignore
function getAttrs (dom: HTMLElement): { [key: string]: any } {
  let { width, height } = dom.style;

  width = width || dom.getAttribute('width') || null;
  height = height || dom.getAttribute('height') || null;

  return {
    src: dom.getAttribute('src') || '',
    title: dom.getAttribute('title') || '',
    alt: dom.getAttribute('alt') || '',
    width: width == null ? null : parseInt(width, 10),
    height: height == null ? null : parseInt(height, 10),
  };
}

export default class Image extends TiptapImage implements MenuBtnView {
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
      parseDOM: [{ tag: 'img[src]', getAttrs }],
      toDOM: (node: ProsemirrorNode) => ['img', node.attrs],
    };
  }

  get view () {
    return ImageView;
  }

  menuBtnView (editorContext: MenuData) {
    return {
      component: ImageCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
