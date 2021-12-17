import { Extension, MenuData, CommandGetter } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { MenuBtnView, MenuBtnComponentOptions } from '@/../types';
import { setTextAlign, isTextAlignActive } from '@/utils/text_align';
import { Alignment, ALIGN_PATTERN } from '@/constants';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class TextAlign extends Extension implements MenuBtnView {
  get name() {
    return 'text_align';
  }

  get defaultOptions() {
    return {
      alignments: [
        Alignment.left,
        Alignment.center,
        Alignment.right,
        Alignment.justify,
      ],
    };
  }

  commands() {
    return this.options.alignments.reduce((commands: CommandGetter, alignment: Alignment) => {
      if (!ALIGN_PATTERN.test(alignment)) return commands;

      return {
        ...commands,
        [`align_${alignment}`]: (): CommandFunction => (state, dispatch) => {
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

  menuBtnView({ commands, editor, t }: MenuData) {
    return this.options.alignments.reduce((views: Array<MenuBtnComponentOptions>, alignment: Alignment) => {
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
          tooltip: t(`editor.extensions.TextAlign.buttons.align_${alignment}.tooltip`),
        },
      });
    }, []);
  }
}
