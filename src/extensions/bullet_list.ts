import { BulletList as TiptapBulletList } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '../types';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';

export default class BulletList extends TiptapBulletList implements MenuBtnView {
  menuBtnView ({ isActive, commands }: MenuData) {
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
