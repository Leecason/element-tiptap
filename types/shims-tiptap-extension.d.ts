declare module 'tiptap-extensions' {
  import { Extension, Node, Mark } from 'tiptap';

  // mark
  class Bold extends Mark {}
  class Underline extends Mark {}
  class Italic extends Mark {}
  class Strike extends Mark {}
  class Link extends Mark {}
  class Code extends Mark {}

  // node
  class Heading extends Node {
    constructor (options?: { levels?: number[] });
  }
  class Image extends Node {}
  class Blockquote extends Node {}
  class CodeBlock extends Node {}
  class ListItem extends Node {}
  class BulletList extends Node {}
  class OrderedList extends Node {}
  class TodoItem extends Node {}
  class TodoList extends Node {}
  class HardBreak extends Node {}
  class Table extends Node {}
  class TableHeader extends Node {}
  class TableCell extends Node {}
  class TableRow extends Node {}

  // extension
  class TrailingNode extends Extension {
    constructor (options?: { node: string, noAfter: string[] });
  }
  class Placeholder extends Extension {
    constructor (options?: {
      emptyEditorClass?: string,
      emptyNodeClass?: string,
      emptyNodeText?: string,
      showOnlyWhenEditable?: boolean,
      showOnlyCurrent?: boolean,
    });
  }
  class History extends Extension {}
  class HorizontalRule extends Extension {}
}
