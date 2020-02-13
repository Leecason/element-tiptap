import { VueConstructor } from 'vue';
import { MenuData, Editor } from 'tiptap';

export interface OptionsInterface {
  lang?: string;
}

export interface ElementTiptapPluginInterface {
  installed: boolean;
  install (Vue: VueConstructor, options: OptionsInterface): void
}

declare module 'tiptap' {
  interface MenuData {
    editor: Editor;
  }
}

export interface MenuBtnComponentOptions {
  component: VueConstructor;
  componentProps?: { [key: string]: any }
  componentEvents?: { [key: string]: any }
}

export type MenuBtnViewType = MenuBtnComponentOptions | MenuBtnComponentOptions[]

export interface MenuBtnView {
  menuBtnView? (menuData: MenuData): MenuBtnViewType;
}
