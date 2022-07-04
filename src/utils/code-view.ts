// @ts-nocheck
// https://github.com/artf/codemirror-formatting/blob/master/formatting.js

const inlineElements = /^(a|abbr|acronym|area|base|bdo|big|br|button|caption|cite|code|col|colgroup|dd|del|dfn|em|frame|hr|iframe|img|input|ins|kbd|label|legend|link|map|object|optgroup|option|param|q|samp|script|select|small|span|strong|sub|sup|textarea|tt|var)$/;

// for format code
export function extendCodemirror(CodeMirror) {
  CodeMirror.extendMode('xml', {
    newlineAfterToken: function(type, content, textAfter, state) {
      let inline = false;
      if (this.configuration === 'html') {
        inline = state.context ? inlineElements.test(state.context.tagName) : false;
      }
      return !inline && ((type === 'tag' && />$/.test(content) && state.context) ||
        /^</.test(textAfter));
    }
  });

  CodeMirror.defineExtension('autoFormatRange', function(from, to) {
    const cm = this;
    const outer = cm.getMode();
    const text = cm.getRange(from, to).split('\n');
    const state = CodeMirror.copyState(outer, cm.getTokenAt(from).state);
    const tabSize = cm.getOption('tabSize');

    let out = '';
    let lines = 0;
    let atSol = from.ch === 0;

    function newline() {
      out += '\n';
      atSol = true;
      ++lines;
    }

    for (let i = 0; i < text.length; ++i) {
      const stream = new CodeMirror.StringStream(text[i], tabSize);
      while (!stream.eol()) {
        const inner = CodeMirror.innerMode(outer, state);
        const style = outer.token(stream, state);
        const cur = stream.current();
        stream.start = stream.pos;
        if (!atSol || /\S/.test(cur)) {
          out += cur;
          atSol = false;
        }
        if (!atSol && inner.mode.newlineAfterToken &&
          inner.mode.newlineAfterToken(style, cur, stream.string.slice(stream.pos) || text[i + 1] || '', inner.state)) { newline(); }
      }
      if (!stream.pos && outer.blankLine) outer.blankLine(state);
      if (!atSol && i < text.length - 1) newline();
    }

    cm.operation(function() {
      cm.replaceRange(out, from, to);
      for (let cur = from.line + 1, end = from.line + lines; cur <= end; ++cur) { cm.indentLine(cur, 'smart'); }
      cm.setSelection(from, cm.getCursor(false));
    });
  });
}
