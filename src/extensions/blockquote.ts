import { NodeSpec, Node as ProsemirrorNode, DOMOutputSpec } from 'prosemirror-model';
import { Blockquote as TiptapBlockquote } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import { ParagraphNodeSpec, getParagraphNodeAttrs, toParagraphDOM } from './paragraph';

const BlockquoteNodeSpec: NodeSpec = {
  ...ParagraphNodeSpec,
  attrs: {
    textAlign: { default: null },
    indent: { default: null },
  },
  content: 'block*',
  defining: true,
  parseDOM: [{
    tag: 'blockquote',
    getAttrs,
  }],
  toDOM,
};

// @ts-ignore
function getAttrs(dom) {
  return getParagraphNodeAttrs(dom);
}

function toDOM(node: ProsemirrorNode): DOMOutputSpec {
  const dom = toParagraphDOM(node);
  // @ts-ignore
  dom[0] = 'blockquote';
  return dom;
}

export default class Blockquote extends TiptapBlockquote implements MenuBtnView {
  get schema() {
    return BlockquoteNodeSpec;
  }

  menuBtnView({ isActive, commands, t }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.blockquote,
        isActive: isActive.blockquote(),
        icon: 'quote-right',
        tooltip: t('editor.extensions.Blockquote.tooltip'),
      },
    };
  }
}
