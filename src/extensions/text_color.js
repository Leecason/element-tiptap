import { Mark } from 'tiptap';
import applyMark from '../utils/apply_mark';
import TextColorPopover from '../components/MenuCommands/TextColorPopover.vue';

export default class TextColor extends Mark {
  get name () {
    return 'text_color';
  }

  get defaultOptions () {
    return {
      colors: [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722',
      ],
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
      component: TextColorPopover,
      componentProps: {
        editorContext,
      },
    };
  }
}
