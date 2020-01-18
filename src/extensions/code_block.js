import { CodeBlock as TiptapCodeBlock } from 'tiptap-extensions';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';

export default class CodeBlock extends TiptapCodeBlock {
  menuBtnView ({ isActive, commands }) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.code_block,
        isActive: isActive.code_block(),
        icon: 'code',
        tooltip: t('editor.extensions.CodeBlock.tooltip'),
      },
    };
  }
}
