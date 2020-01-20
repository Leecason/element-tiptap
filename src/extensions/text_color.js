import { Mark } from 'tiptap';
import { PREDEFINED_COLORS } from '../utils/color';
import applyMark from '../utils/apply_mark';
import ColorPopover from '../components/MenuCommands/ColorPopover.vue';

export default class TextColor extends Mark {
  get name () {
    return 'text_color';
  }

  get defaultOptions () {
    return {
      colors: PREDEFINED_COLORS,
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
    return (color) => (state, dispatch) => {
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
          dispatch(tr);
          return true;
        }
      }
    };
  }

  menuBtnView (editorContext) {
    return {
      component: ColorPopover,
      componentProps: {
        predefinedColors: this.options.colors,
        tooltip: 'textColor',
        icon: 'font',
      },
      componentEvents: {
        select: (color) => editorContext.commands.text_color(color),
      },
    };
  }
}
