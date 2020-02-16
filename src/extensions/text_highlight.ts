// @ts-nocheck
import { Mark, MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { MenuBtnView } from '@/types';
import applyMark from '@/utils/apply_mark';
import { t } from '@/i18n/index';
import { PREDEFINED_COLORS } from '@/constants';
import ColorPopover from '../components/MenuCommands/ColorPopover.vue';

export default class TextHighlight extends Mark implements MenuBtnView {
  get name () {
    return 'text_highlight';
  }

  get defaultOptions () {
    return {
      colors: PREDEFINED_COLORS,
    };
  }

  get schema () {
    return {
      attrs: {
        highlightColor: '',
      },
      inline: true,
      group: 'inline',
      parseDOM: [{
        style: 'span[style*=background-color]',
        getAttrs: color => {
          return {
            highlightColor: this.options.colors.includes(color) ? color : '',
          };
        },
      }],
      toDOM (node) {
        const { highlightColor } = node.attrs;
        let style = '';
        if (highlightColor) {
          style += `background-color: ${highlightColor};`;
        }
        return ['span', { style }, 0];
      },
    };
  }

  commands () {
    return (color: string): CommandFunction => (state, dispatch) => {
      if (color !== undefined) {
        const { schema } = state;
        let { tr } = state;
        const markType = schema.marks.text_highlight;
        const attrs = color ? { highlightColor: color } : null;
        tr = applyMark(
          state.tr.setSelection(state.selection),
          markType,
          attrs
        );
        if (tr.docChanged || tr.storedMarksSet) {
          dispatch && dispatch(tr);
          return true;
        }
      }
      return false;
    };
  }

  menuBtnView (editorContext: MenuData) {
    return {
      component: ColorPopover,
      componentProps: {
        predefinedColors: this.options.colors,
        tooltip: t('editor.extensions.TextHighlight.tooltip'),
        icon: 'highlighter',
        resetButtonText: t('editor.extensions.TextHighlight.reset'),
      },
      componentEvents: {
        select: (color: string) => editorContext.commands.text_highlight(color),
      },
    };
  }
}
