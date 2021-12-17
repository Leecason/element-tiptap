import { CodeBlock as TiptapCodeBlock } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class CodeBlock extends TiptapCodeBlock implements MenuBtnView {
  menuBtnView({ isActive, commands, t }: MenuData) {
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
