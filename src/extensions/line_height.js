import { Extension } from 'tiptap';
import { setTextLineHeight } from '../utils/line_height.ts';
import LineHeightDropdown from '../components/MenuCommands/LineHeightDropdown.vue';

export default class LineHeight extends Extension {
  get name () {
    return 'line_height';
  }

  get defaultOptions () {
    return {
      lineHeights: [
        '100%',
        '115%',
        '150%',
        '200%',
        '250%',
        '300%',
      ]
    };
  }

  commands () {
    return ({ lineHeight }) => this.createLineHeightCommand(lineHeight);
  }

  menuBtnView (editorContext) {
    return {
      component: LineHeightDropdown,
      componentProps: {
        editorContext,
      },
    };
  }

  createLineHeightCommand (lineHeight) {
    return (state, dispatch) => {
      const { selection } = state;
      let { tr } = state;
      tr = tr.setSelection(selection);

      tr = setTextLineHeight(tr, lineHeight);

      if (tr.docChanged) {
        dispatch && dispatch(tr);
        return true;
      }

      return false;
    };
  }
}
