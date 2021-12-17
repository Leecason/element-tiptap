import { NodeSpec, Node as ProsemirrorNode, DOMOutputSpec } from 'prosemirror-model';
import { Heading as TiptapHeading } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import HeadingDropdown from '@/components/MenuCommands/HeadingDropdown.vue';
import { ParagraphNodeSpec, getParagraphNodeAttrs, toParagraphDOM } from './paragraph';

// @ts-ignore
function getAttrs(dom) {
  const attrs = getParagraphNodeAttrs(dom);
  const level = dom.nodeName.match(/[H|h](\d)/)[1];
  attrs.level = Number(level);
  return attrs;
}

function toDOM(node: ProsemirrorNode): DOMOutputSpec {
  const dom = toParagraphDOM(node);
  const level = node.attrs.level || 1;
  // @ts-ignore
  dom[0] = `h${level}`;
  return dom;
}

export default class Heading extends TiptapHeading implements MenuBtnView {
  get schema(): NodeSpec {
    return {
      ...ParagraphNodeSpec,
      attrs: {
        ...ParagraphNodeSpec.attrs,
        level: {
          default: 1,
        },
      },
      defining: true,
      draggable: false,
      parseDOM: this.options.levels.map((level: number) => ({
        tag: `h${level}`,
        getAttrs,
      })),
      toDOM,
    };
  }

  menuBtnView(editorContext: MenuData) {
    return {
      component: HeadingDropdown,
      componentProps: {
        editorContext,
      },
    };
  }
}
