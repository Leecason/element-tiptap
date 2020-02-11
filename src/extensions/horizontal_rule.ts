import { HorizontalRule as TiptapHorizontalRule } from 'tiptap-extensions';
import { MenuData, MenuBtnView } from '../types';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';

export default class HorizontalRule extends TiptapHorizontalRule {
  menuBtnView ({ commands }: MenuData): MenuBtnView {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.horizontal_rule,
        icon: 'minus',
        tooltip: t('editor.extensions.HorizontalRule.tooltip'),
      },
    };
  }
}
