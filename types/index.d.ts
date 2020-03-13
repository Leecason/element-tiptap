import { VueConstructor } from 'vue';

export interface OptionsInterface {
  lang?: string;
  spellcheck?: boolean;
}

export interface ElementTiptapPluginInterface {
  installed: boolean;
  install (Vue: VueConstructor, options: OptionsInterface): void;
  spellcheck: boolean;
}

export interface MenuBtnComponentOptions {
  component: VueConstructor;
  componentProps?: { [key: string]: any };
  componentEvents?: { [key: string]: any };
}

export type MenuBtnViewType = MenuBtnComponentOptions | MenuBtnComponentOptions[];

export interface MenuBtnView {
  // TODO: tiptap menuData
  menuBtnView (menuData: any): MenuBtnViewType;
}

declare module 'vue/types/vue' {
  interface Vue {
    $elementTiptapPlugin: ElementTiptapPluginInterface;
  }
}
