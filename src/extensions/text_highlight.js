import { Mark } from 'tiptap';
import { PREDEFINED_COLORS } from '../utils/color';
import applyMark from '../utils/apply_mark';
import ColorPopover from '../components/MenuCommands/ColorPopover.vue';

export default class TextHighlight extends Mark {
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
    return (color) => (state, dispatch) => {
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
        tooltip: 'Text highlight',
        icon: 'highlighter',
      },
      componentEvents: {
        select: (color) => editorContext.commands.text_highlight(color),
      },
    };
  }
}
