import { Editor } from '@tiptap/core';
import { ref, provide, watch, nextTick, unref, ShallowRef } from 'vue';

export default function useCodeView(editor: ShallowRef<Editor | undefined>) {
  // Don't use ref or reactive, object proxy will encounter this problem
  // https://github.com/codemirror/codemirror5/issues/6805
  let cmEditor;
  const cmTextAreaRef = ref();
  const isCodeViewMode = ref(false);
  const toggleIsCodeViewMode = (val: boolean) => {
    isCodeViewMode.value = val;
  };

  const formatCode = (cm: any) => {
    cm.execCommand('selectAll');
    const selectedRange = {
      from: cm.getCursor(true),
      to: cm.getCursor(false),
    };
    cm.autoFormatRange(selectedRange.from, selectedRange.to);
    cm.setCursor(0);
  };

  const initCodemirror = () => {
    const codeViewExtension = unref(editor)!.extensionManager.extensions.find(
      (e) => e.name === 'codeView'
    );
    if (codeViewExtension) {
      const { codemirror, codemirrorOptions } = codeViewExtension.options;
      if (codemirror) {
        // merge options
        const cmOptions = {
          ...codemirrorOptions,
          readOnly: false,
          spellcheck: false,
          // readOnly: this.readonly,
          // spellcheck: this.spellcheckEnabled,
        };
        cmEditor = codemirror.fromTextArea(cmTextAreaRef.value, cmOptions);
        cmEditor.setValue(unref(editor)!.getHTML()); // init content
        formatCode(cmEditor);
      }
    }
  };

  const destroyCodemirror = () => {
    const element = cmEditor.doc.cm.getWrapperElement();
    element && element.remove && element.remove();
    cmEditor = null;
  };

  watch(isCodeViewMode, (val: boolean) => {
    if (val) {
      nextTick(() => {
        if (!cmEditor) {
          initCodemirror();
        }
      });
    } else {
      // update editor content
      if (cmEditor) {
        const content = cmEditor.getValue();
        unref(editor)!.commands.setContent(content, true /* emitUpdate */);
        destroyCodemirror();
      }
    }
  });

  provide('isCodeViewMode', isCodeViewMode);
  provide('toggleIsCodeViewMode', toggleIsCodeViewMode);

  return {
    cmTextAreaRef,
    isCodeViewMode,
  };
}
