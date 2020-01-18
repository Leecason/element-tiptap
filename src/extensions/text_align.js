import { Extension } from 'tiptap';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { setTextAlign, isTextAlignActive } from '../utils/text_align';
import { t } from '../i18n/index';

export const ALIGN_PATTERN = /(left|right|center|justify)/;

export default class TextAlign extends Extension {
  get name () {
    return 'text_align';
  }

  get defaultOptions () {
    return {
      alignments: [
        'left',
        'center',
        'right',
        'justify',
      ],
    };
  }

  commands () {
    return this.options.alignments.reduce((commands, alignment) => {
      if (!ALIGN_PATTERN.test(alignment)) return commands;

      return {
        ...commands,
        [`align_${alignment}`]: () => (state, dispatch) => {
          const { selection } = state;
          const tr = setTextAlign(
            state.tr.setSelection(selection),
            alignment === 'left' ? null : alignment,
          );

          if (tr.docChanged) {
            dispatch && dispatch(tr);
            return true;
          } else {
            return false;
          }
        },
      };
    }, {});
  }

  menuBtnView ({ commands, editor }) {
    return this.options.alignments.reduce((views, alignment) => {
      if (!ALIGN_PATTERN.test(alignment)) return views;

      const isActive = alignment === 'left'
        ? false
        : isTextAlignActive(editor.state, alignment);

      return views.concat({
        component: CommandButton,
        componentProps: {
          isActive,
          command: commands[`align_${alignment}`],
          icon: `align-${alignment}`,
          tooltip: t(`editor.extensions.TextAlign.tooltip.align_${alignment}`),
        },
      });
    }, []);
  }
}
