// @ts-nocheck
import { Mark, MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { Node as ProsemirrorNode, MarkType } from 'prosemirror-model';
import { MenuBtnView } from '@/../types';
import FontTypeDropdown from '@/components/MenuCommands/FontTypeDropdown.vue';
import { DEFAULT_FONT_TYPE_MAP, setFontType } from '@/utils/font_type';

export default class FontType extends Mark implements MenuBtnView {
  get name() {
    return 'font_type';
  }

  get defaultOptions() {
    return {
      fontTypes: DEFAULT_FONT_TYPE_MAP,
    };
  }

  get schema() {
    return {
      attrs: {
        name: '',
      },
      inline: true,
      group: 'inline',
      parseDOM: [
        {
          style: 'font-family',
          getAttrs: (name: string) => {
            return {
              name: name ? name.replace(/["']/g, '') : '',
            };
          },
        },
      ],
      toDOM(node: ProsemirrorNode) {
        const { name } = node.attrs;
        const attrs: { style?: string } = {};

        if (name) {
          attrs.style = `font-family: ${name}`;
        }
        return ['span', attrs, 0];
      },
    };
  }

  commands({ type }: { type: MarkType }) {
    return (name: string): CommandFunction => (state, dispatch) => {
      let { tr } = state;
      tr = setFontType(
        state.tr.setSelection(state.selection),
        type,
        name,
      );
      if (tr.docChanged || tr.storedMarksSet) {
        dispatch && dispatch(tr);
        return true;
      }
      return false;
    };
  }

  menuBtnView(editorContext: MenuData) {
    return {
      component: FontTypeDropdown,
      componentProps: {
        editorContext,
      },
    };
  }
}
