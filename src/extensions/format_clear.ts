import { Extension, MenuData } from 'tiptap';
import { CommandFunction } from 'tiptap-commands';
import { MenuBtnView } from '@/../types';
import { clearMarks } from '@/utils/format_clear';
import { t } from '@/i18n/index';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class FormatClear extends Extension implements MenuBtnView {
  get name () {
    return 'format_clear';
  }

  commands () {
    return (): CommandFunction => (state, dispatch) => {
      const tr = clearMarks(state.tr.setSelection(state.selection), state.schema);

      if (dispatch && tr.docChanged) {
        dispatch(tr);
        return true;
      }
      return false;
    };
  }

  menuBtnView ({ commands }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.format_clear,
        icon: 'remove-format',
        tooltip: t('editor.extensions.FormatClear.tooltip'),
      },
    };
  }
}
