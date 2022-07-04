import type { Editor } from '@tiptap/core';
import TiptapHorizontalRule from '@tiptap/extension-horizontal-rule';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const HorizontalRule = TiptapHorizontalRule.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.setHorizontalRule();
            },
            icon: 'horizontal-rule',
            tooltip: t('editor.extensions.HorizontalRule.tooltip'),
          },
        };
      },
    };
  },
});

export default HorizontalRule;
