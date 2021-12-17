import { BulletList as TiptapBulletList } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '@/../types';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

export default class BulletList extends TiptapBulletList implements MenuBtnView {
  menuBtnView({ isActive, commands, t }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        isActive: isActive.bullet_list(),
        command: commands.bullet_list,
        icon: 'list-ul',
        tooltip: t('editor.extensions.BulletList.tooltip'),
      },
    };
  }
}
