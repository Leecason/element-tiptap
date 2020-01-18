import { Strike as TiptapStrike } from 'tiptap-extensions';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';
export default class Strike extends TiptapStrike {
  menuBtnView ({ isActive, commands }) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.strike,
        isActive: isActive.strike(),
        icon: 'strikethrough',
        tooltip: t('editor.extensions.Strike.tooltip'),
      },
    };
  }
}
