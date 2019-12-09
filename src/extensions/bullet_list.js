import { BulletList as TiptapBulletList } from 'tiptap-extensions';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class BulletList extends TiptapBulletList {
  menuBtnView ({ isActive, commands }) {
    return {
      component: CommandButton,
      componentProps: {
        isActive: isActive.bullet_list(),
        command: commands.bullet_list,
        icon: 'list-ul',
        tooltip: 'Bullet list',
      },
    };
  }
}
