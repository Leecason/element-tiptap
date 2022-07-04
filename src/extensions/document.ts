import TiptapDocument from '@tiptap/extension-document';
import Title from './title';

export interface DocumentOptions {
  title: boolean;
}

const Document = TiptapDocument.extend<DocumentOptions>({
  addOptions() {
    return {
      title: false,
    };
  },

  content() {
    return !!this.options.title ? 'title block+' : 'block+';
  },

  addExtensions() {
    if (this.options.title) {
      return [Title];
    }
    return [];
  },
});

export default Document;
