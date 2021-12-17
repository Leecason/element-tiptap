import { Extension } from 'tiptap';
import { MenuBtnView } from '@/../types';
import CodeViewCommandButton from '@/components/MenuCommands/CodeViewCommandButton.vue';
import { extendCodemirror } from '@/utils/code_view';
import Logger from '@/utils/logger';

export const DEFAULT_CODEMIRROR_OPTIONS = {
  lineNumbers: true,
  lineWrapping: true,
  tabSize: 2,
  tabMode: 'indent',
  mode: 'text/html',
};

export default class CodeView extends Extension implements MenuBtnView {
  constructor(options = {}) {
    super(options);

    // @ts-ignore
    const { codemirror } = options;
    if (codemirror == null) {
      Logger.warn('`CodeView` extension requires the CodeMirror library.');
    } else {
      extendCodemirror(codemirror);
    }

    this.options = {
      codemirror,
      codemirrorOptions: {
        ...this.defaultOptions.codemirrorOptions,
        // @ts-ignore
        ...options.codemirrorOptions,
      },
    };
  }

  get name() {
    return 'code_view';
  }

  get defaultOptions() {
    return {
      codemirror: null,
      codemirrorOptions: {
        ...DEFAULT_CODEMIRROR_OPTIONS,
      },
    };
  }

  menuBtnView() {
    return {
      component: CodeViewCommandButton,
    };
  }
}
