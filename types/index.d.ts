import { VueConstructor } from 'vue';
import { default as ElTiptap } from '@/components/ElementTiptap.vue';

export * from './extensions';

export interface OptionsInterface {
  lang?: string;
  spellcheck?: boolean;
}

export type ElementTiptap = ElTiptap;
export type ElementTiptapPlugin = ElementTiptapPluginInterface;

export interface ElementTiptapPluginInterface {
  installed: boolean;
  install(Vue: VueConstructor, options: OptionsInterface): void;
  spellcheck: boolean;
  lang: string;
}

export interface MenuBtnComponentOptions {
  component: VueConstructor;
  componentProps?: { [key: string]: any };
  componentEvents?: { [key: string]: any };
}

export type MenuBtnViewType =
  | MenuBtnComponentOptions
  | MenuBtnComponentOptions[];

export interface MenuBtnView {
  // TODO: tiptap menuData
  menuBtnView(menuData: any): MenuBtnViewType;
}

declare module 'vue/types/vue' {
  interface Vue {
    $elementTiptapPlugin: ElementTiptapPluginInterface;
  }
}
