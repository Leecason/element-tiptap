// @ts-nocheck
import { Mark, MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { MenuBtnView } from '@/../types';
import applyMark from '@/utils/apply_mark';
import { t } from '@/i18n/index';
import { COLOR_SET } from '@/constants';
import ColorPopover from '@/components/MenuCommands/ColorPopover.vue';

export default class TextColor extends Mark implements MenuBtnView {
  get name () {
    return 'text_color';
  }

  get defaultOptions () {
    return {
      colors: COLOR_SET,
    };
  }

  get schema () {
    return {
      attrs: {
        color: '',
      },
      inline: true,
      group: 'inline',
      parseDOM: [{
        style: 'color',
        getAttrs: color => {
          return {
            color: this.options.colors.includes(color) ? color : '',
          };
        },
      }],
      toDOM (node) {
        const { color } = node.attrs;
        let style = '';
        if (color) {
          style += `color: ${color};`;
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
        const markType = schema.marks.text_color;
        const attrs = color ? { color } : null;
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

  menuBtnView ({ commands, getMarkAttrs }: MenuData) {
    return {
      component: ColorPopover,
      componentProps: {
        colorSet: this.options.colors,
        selectedColor: getMarkAttrs('text_color').color,
        tooltip: t('editor.extensions.TextColor.tooltip'),
        icon: 'font',
      },
      componentEvents: {
        select: (color: string) => commands.text_color(color),
      },
    };
  }
}
