// @ts-nocheck
import { Mark, MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { Node as ProsemirrorNode, MarkType } from 'prosemirror-model';
import { MenuBtnView } from '@/../types';
import FontSizeDropdown from '@/components/MenuCommands/FontSizeDropdown.vue';
import { DEFAULT_FONT_SIZES, setFontSize } from '@/utils/font_size';

export default class FontSiz extends Mark implements MenuBtnView {
  get name () {
    return 'font_size';
  }

  get defaultOptions () {
    return {
      fontSizes: DEFAULT_FONT_SIZES,
    };
  }

  get schema () {
    return {
      attrs: {
        px: '',
      },
      inline: true,
      group: 'inline',
      parseDOM: [
        {
          style: 'font-size',
          getAttrs: (fontSize: string) => {
            return {
              px: fontSize || '',
            };
          },
        },
      ],
      toDOM (node: ProsemirrorNode) {
        const { px } = node.attrs;
        const attrs: { style?: string } = {};

        if (px) {
          attrs.style = `font-size: ${px}px`;
        }
        return ['span', attrs, 0];
      },
    };
  }

  commands ({ type }: { type: MarkType }) {
    return (fontSize: string): CommandFunction => (state, dispatch) => {
      let { tr } = state;
      tr = setFontSize(
        state.tr.setSelection(state.selection),
        type,
        fontSize,
      );
      if (tr.docChanged || tr.storedMarksSet) {
        dispatch && dispatch(tr);
        return true;
      }
      return false;
    };
  }

  menuBtnView (editorContext: MenuData) {
    return {
      component: FontSizeDropdown,
      componentProps: {
        editorContext,
      },
    };
  }
}
