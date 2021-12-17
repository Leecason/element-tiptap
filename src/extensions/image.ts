// @ts-nocheck
import { Node as ProsemirrorNode, DOMOutputSpec } from 'prosemirror-model';
import { Image as TiptapImage } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import { ImageDisplay } from '@/utils/image';
import { DEFAULT_IMAGE_WIDTH, DEFAULT_IMAGE_DISPLAY, DEFAULT_IMAGE_URL_REGEX } from '@/constants';
import InsertImageCommandButton from '@/components/MenuCommands/Image/InsertImageCommandButton.vue';
import ImageView from '@/components/ExtensionViews/ImageView.vue';

// @ts-ignore
function getAttrs(dom: HTMLElement): { [key: string]: any } {
  const { cssFloat, display } = dom.style;
  let { width, height } = dom.style;

  let dp = dom.getAttribute('data-display') || dom.getAttribute('display');
  if (dp) {
    dp = /(inline|block|left|right)/.test(dp) ? dp : ImageDisplay.INLINE;
  } else if (cssFloat === 'left' && !display) {
    dp = ImageDisplay.FLOAT_LEFT;
  } else if (cssFloat === 'right' && !display) {
    dp = ImageDisplay.FLOAT_RIGHT;
  } else if (!cssFloat && display === 'block') {
    dp = ImageDisplay.BREAK_TEXT;
  } else {
    dp = ImageDisplay.INLINE;
  }

  width = width || dom.getAttribute('width') || null;
  height = height || dom.getAttribute('height') || null;

  return {
    src: dom.getAttribute('src') || '',
    title: dom.getAttribute('title') || '',
    alt: dom.getAttribute('alt') || '',
    width: width == null ? null : parseInt(width, 10),
    height: height == null ? null : parseInt(height, 10),
    display: dp,
  };
}

function toDOM(node: ProsemirrorNode): DOMOutputSpec {
  const { src, alt, title, width, height, display } = node.attrs;

  const attrs: { [key: string]: any } = {
    src,
    alt,
    title,
    width,
    height,
  };

  attrs['data-display'] = display;

  return ['img', attrs];
}

export default class Image extends TiptapImage implements MenuBtnView {
  get defaultOptions() {
    return {
      defaultWidth: DEFAULT_IMAGE_WIDTH,
      defaultDisplay: DEFAULT_IMAGE_DISPLAY,
      urlPattern: DEFAULT_IMAGE_URL_REGEX,
      uploadRequest: null,
    };
  }

  get schema() {
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
          default: this.imageDefaultWidth > 0
            ? this.imageDefaultWidth
            : DEFAULT_IMAGE_WIDTH,
        },
        height: {
          default: null,
        },
        display: {
          default: /(inline|block|left|right)/.test(this.defaultDisplay)
            ? this.defaultDisplay
            : DEFAULT_IMAGE_DISPLAY,
        },
      },
      group: 'inline',
      draggable: true,
      parseDOM: [{ tag: 'img[src]', getAttrs }],
      toDOM,
    };
  }

  get view() {
    return ImageView;
  }

  menuBtnView(editorContext: MenuData) {
    return {
      component: InsertImageCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
