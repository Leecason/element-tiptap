// @ts-nocheck
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class CodeViewMixin extends Vue {
  cmInstance = null;
  isCodeViewMode = false;

  @Watch('isCodeViewMode')
  onCodeViewModeChange(val: boolean): void {
    if (val) {
      this.$nextTick(() => !this.cmInstance && this.initCodemirror());
    } else { // update editor content
      if (this.cmInstance) {
        const content = this.cmInstance.getValue();
        this.editor.setContent(content, true /* emitUpdate */);
        this.destroyCodemirror();
      }
    }
  }

  private initCodemirror() {
    const codeView = this.extensions.find(e => e.name === 'code_view');
    if (codeView) {
      const { codemirror, codemirrorOptions } = codeView.options;
      if (codemirror) {
        // merge options
        const cmOptions = {
          ...codemirrorOptions,
          readOnly: this.readonly,
          spellcheck: this.spellcheckEnabled,
        };
        this.cmInstance = codemirror.fromTextArea(this.$refs.cmTextArea, cmOptions);
        this.cmInstance.setValue(this.editor.getHTML()); // init content
        this.formatCode();
      }
    }
  }

  private destroyCodemirror() {
    const element = this.cmInstance.doc.cm.getWrapperElement();
    element && element.remove && element.remove();
    this.cmInstance = null;
  }

  private formatCode() {
    const cm = this.cmInstance;
    cm.execCommand('selectAll');
    const selectedRange = {
      from: cm.getCursor(true),
      to: cm.getCursor(false),
    };
    cm.autoFormatRange(selectedRange.from, selectedRange.to);
    cm.setCursor(0);
  }
}
