export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Bold',
      },
      Underline: {
        tooltip: 'Underline',
      },
      Italic: {
        tooltip: 'Italic',
      },
      Strike: {
        tooltip: 'Strike through',
      },
      Heading: {
        tooltip: 'Heading',
        buttons: {
          paragraph: 'paragraph',
          heading: 'Heading',
        }
      },
      Blockquote: {
        tooltip: 'Block quote',
      },
      CodeBlock: {
        tooltip: 'Code block',
      },
      Link: {
        tooltip: 'Apply link',
        control: {
          title: 'Link',
          placeholder: 'Href',
          confirm: 'Apply',
          cancel: 'Close',
        },
      },
      Image: {
        tooltip: 'Insert image',
        buttons: {
          insert_by_url: 'Insert Image By Url',
          upload_image: 'Upload Image',
        },
        control: {
          insert_by_url: {
            title: 'Insert image',
            placeholder: 'Url of image',
            confirm: 'Insert',
            cancel: 'Cancel',
            invalid_url: 'Please enter the correct url',
          },
          upload_image: {
            title: 'Upload image',
            button: 'Choose an image file or drag it here',
          },
        },
      },
      Iframe: {
        tooltip: 'Insert video',
        control: {
          title: 'Insert video',
          placeholder: 'Href',
          confirm: 'Insert',
          cancel: 'Cancel',
        },
      },
      BulletList: {
        tooltip: 'Bullet list',
      },
      OrderedList: {
        tooltip: 'Ordered list',
      },
      TodoList: {
        tooltip: 'Todo list',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Align left',
          },
          align_center: {
            tooltip: 'Align center',
          },
          align_right: {
            tooltip: 'Align right',
          },
          align_justify: {
            tooltip: 'Align justify',
          },
        },
      },
      TextColor: {
        tooltip: 'Text color',
        reset: 'Clear',
      },
      TextHighlight: {
        tooltip: 'Text highlight',
        reset: 'Transparent',
      },
      LineHeight: {
        tooltip: 'Line height',
      },
      Table: {
        tooltip: 'Table',
        buttons: {
          insert_table: 'Insert Table',
          add_column_before: 'Add Column Before',
          add_column_afer: 'Add Column After',
          delete_column: 'Delete Column',
          add_row_before: 'Add Row Before',
          add_row_after: 'Add Row After',
          delete_row: 'Delete Row',
          merge_cells: 'Merge Cells',
          split_cell: 'Split Cell',
          delete_table: 'Delete Table',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Indent',
          },
          outdent: {
            tooltip: 'Outdent',
          },
        },
      },
      FormatClear: {
        tooltip: 'Clear format',
      },
      HorizontalRule: {
        tooltip: 'Horizontal rule',
      },
      History: {
        tooltip: {
          undo: 'Undo',
          redo: 'Redo',
        },
      },
    },
  },
};
