import { Extension } from 'tiptap';
import { setTextLineHeight } from '../utils/line_height';
import LineHeightDropdown from '../components/MenuCommands/LineHeightDropdown.vue';

const LINE_HEIGHT_100 = '100%';
const LINE_HEIGHT_125 = '125%';
const LINE_HEIGHT_150 = '150%';
const LINE_HEIGHT_175 = '175%';
const LINE_HEIGHT_200 = '200%';

export const LINE_HEIGHT_VALUE_MAP = {
  LINE_HEIGHT_100,
  LINE_HEIGHT_125,
  LINE_HEIGHT_150,
  LINE_HEIGHT_175,
  LINE_HEIGHT_200,
};

export default class LineHeight extends Extension {
  get name () {
    return 'line_height';
  }

  get defaultOptions () {
    return {
      lineHeights: [
        LINE_HEIGHT_100,
        LINE_HEIGHT_125,
        LINE_HEIGHT_150,
        LINE_HEIGHT_175,
        LINE_HEIGHT_200,
      ],
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
