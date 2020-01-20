import { HorizontalRule as TiptapHorizontalRule } from 'tiptap-extensions';
import CommandButton from '../components/MenuCommands/CommandButton.vue';

export default class HorizontalRule extends TiptapHorizontalRule {
  menuBtnView ({ commands }) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.horizontal_rule,
        icon: 'minus',
        tooltip: 'horizontalLine',
      },
    };
  }
}
