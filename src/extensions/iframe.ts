import { MenuData, Node } from 'tiptap';
import { MenuBtnView } from '@/../types';
import InsertIframeCommandButton from '@/components/MenuCommands/Iframe/InsertIframeCommandButton.vue';
import IframeView from '@/components/ExtensionViews/IframeView.vue';
import { NodeSpec } from 'prosemirror-model';

export default class Iframe extends Node implements MenuBtnView {
  get name () {
    return 'iframe';
  }

  get schema (): NodeSpec {
    return {
      attrs: {
        src: {
          default: '',
        },
        width: {
          default: 400,
        },
        height: {
          default: 250,
        },
      },
      group: 'block',
      draggable: true,
      parseDOM: [{
        tag: 'iframe',
        getAttrs: dom => ({
          // @ts-ignore
          src: dom.getAttribute('src'),
          // @ts-ignore
          width: dom.getAttribute('width') ? dom.getAttribute('width') : 400,
          // @ts-ignore
          height: dom.getAttribute('height') ? dom.getAttribute('height') : 250,
        }),
      }],
      toDOM: (node) => ['iframe', {
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        frameborder: '0',
        allowfullscreen: 'true',
      }],
    };
  }

  // @ts-ignore
  commands ({ type }): any {
    return (attrs: any) => (state: any, dispatch: any) => {
      const { selection } = state;
      const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
      const node = type.create(attrs);
      const transaction = state.tr.insert(position, node);
      dispatch(transaction);
    };
  }

  get view (): any {
    return IframeView;
  }

  menuBtnView (editorContext: MenuData) {
    return {
      component: InsertIframeCommandButton,
      componentProps: {
        editorContext,
      },
    };
  }
}
