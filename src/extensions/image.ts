// @ts-nocheck
import { DOMOutputSpec, Node as ProsemirrorNode } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';
import { Image as TiptapImage } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import { ImageDisplay } from '@/utils/image';
import { DEFAULT_IMAGE_DISPLAY, DEFAULT_IMAGE_URL_REGEX, DEFAULT_IMAGE_WIDTH } from '@/constants';
import InsertImageCommandButton from '@/components/MenuCommands/Image/InsertImageCommandButton.vue';
import ImageView from '@/components/ExtensionViews/ImageView.vue';

// @ts-ignore
function getAttrs (dom: HTMLElement): { [key: string]: any } {
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

function toDOM (node: ProsemirrorNode): DOMOutputSpec {
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
  get defaultOptions () {
    return {
      defaultWidth: DEFAULT_IMAGE_WIDTH,
      defaultDisplay: DEFAULT_IMAGE_DISPLAY,
      urlPattern: DEFAULT_IMAGE_URL_REGEX,
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

  get view () {
    return ImageView;
  }

  menuBtnView (editorContext: MenuData) {
    return {
      component: InsertImageCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }

  get plugins () {
    return [
      new Plugin({
        props: {
          handleDOMEvents: {
            paste (view, event) {
              const items = (event.clipboardData || event.originalEvent.clipboardData).items;

              items.forEach(async item => {
                const { schema } = view.state;
                const image = item.getAsFile();

                // Return here, otherwise copying texts won't possible anymore
                if (!image || !image.type.includes('image')) {
                  return;
                }

                event.preventDefault();

                const reader = new FileReader();

                reader.addEventListener('load', function () {
                  const node = schema.nodes.image.create({
                    src: reader.result,
                  });
                  const transaction = view.state.tr.replaceSelectionWith(node);
                  view.dispatch(transaction);
                }, false);

                reader.readAsDataURL(image);
              });
            }
          }
        }
      })
    ];
  }
}
