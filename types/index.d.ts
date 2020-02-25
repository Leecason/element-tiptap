import { VueConstructor } from 'vue';
import { MenuData, Editor } from 'tiptap';

export type AnyObject = {
  [key: string]: any;
}

export interface OptionsInterface {
  lang?: string;
}

export interface ElementTiptapPluginInterface {
  installed: boolean;
  install (Vue: VueConstructor, options: OptionsInterface): void;
}

declare module 'tiptap' {
  interface MenuData {
    editor: Editor;
  }
}

export interface MenuBtnComponentOptions {
  component: VueConstructor;
  componentProps?: AnyObject;
  componentEvents?: AnyObject;
}

export type MenuBtnViewType = MenuBtnComponentOptions | MenuBtnComponentOptions[];

export interface MenuBtnView {
  menuBtnView (menuData: MenuData): MenuBtnViewType;
}
