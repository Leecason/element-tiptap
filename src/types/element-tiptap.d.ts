import { VueConstructor } from 'vue';
import {
  MenuData as TiptapMenuData,
  Editor as TiptapEditor,
} from 'tiptap';

export interface MenuData extends TiptapMenuData {
  editor: TiptapEditor;
}

export interface MenuBtnComponentOptions {
  component: VueConstructor;
  componentProps?: { [key: string]: any }
  componentEvents?: { [key: string]: any }
}
