// @ts-nocheck
import { Node as ProsemirrorNode, NodeType } from 'prosemirror-model';
import { Image as TiptapImage } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { deleteSelection } from 'prosemirror-commands';
import { MenuBtnView } from '@/../types';
import { updateImageAttrs } from '@/utils/image';
import InsertImageCommandButton from '@/components/MenuCommands/Image/InsertImageCommandButton.vue';
import ImageView from '@/components/ExtensionViews/ImageView.vue';

const IMAGE_URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

export type ImageNodeAttrs = {
  src: string;
  title: string;
  alt: string;
  width: number | null;
  height: number | null;
};

// @ts-ignore
function getAttrs (dom: HTMLElement): ImageNodeAttrs {
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

  commands ({ type }: { type: NodeType }) {
    return {
      // https://github.com/scrumpy/tiptap/blob/master/packages/tiptap-extensions/src/nodes/Image.js#L49
      image: (attrs: ImageNodeAttrs): CommandFunction => (state, dispatch) => {
        const { selection } = state;
        const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
        const node = type.create(attrs);
        const transaction = state.tr.insert(position, node);
        dispatch && dispatch(transaction);
        return true;
      },
      remove_image: (): CommandFunction => deleteSelection,
      update_image: (attrs: ImageNodeAttrs): CommandFunction => (state, dispatch) => {
        const tr = updateImageAttrs(state.tr, type, attrs);
        if (tr.docChanged) {
          dispatch && dispatch(tr);
          return true;
        }
        return false;
      },
    };
  }

  menuBtnView (editorContext: MenuData) {
    return {
      component: InsertImageCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
