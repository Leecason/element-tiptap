export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: '太字',
      },
      Underline: {
        tooltip: '下線',
      },
      Italic: {
        tooltip: '斜体',
      },
      Strike: {
        tooltip: '取り消し線',
      },
      Heading: {
        tooltip: 'タイトル',
        buttons: {
          paragraph: '正文',
          heading: 'タイトル',
        },
      },
      Blockquote: {
        tooltip: '引用',
      },
      CodeBlock: {
        tooltip: 'コードブロック',
      },
      Link: {
        add: {
          tooltip: 'リンク',
          control: {
            title: 'リンク',
            href: 'リンク',
            open_in_new_tab: '新しいタブで開く',
            confirm: '追加',
            cancel: 'キャンセル',
          },
        },
        edit: {
          tooltip: 'リンク',
          control: {
            title: 'リンク',
            href: 'リンク',
            open_in_new_tab: '新しいタブで開く',
            confirm: '更新',
            cancel: 'キャンセル',
          },
        },
        unlink: {
          tooltip: 'リンクを取る',
        },
        open: {
          tooltip: 'リンクを見る',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: '画像挿入',
            external: 'ウェブ画像を挿入',
            upload: 'ローカル画像をアップロード',
          },
          remove_image: {
            tooltip: '削除する',
          },
          image_options: {
            tooltip: '画像オプション',
          },
          display: {
            tooltip: 'レイアウト',
            inline: 'インライン',
            block: '改行',
            left: '左フロート',
            right: '右フロート',
          },
        },
        control: {
          insert_by_url: {
            title: 'ウェブ画像を挿入',
            placeholder: 'リンクを入力',
            confirm: '挿入',
            cancel: 'キャンセル',
            invalid_url: '正しい画像リンクを入力してください',
          },
          upload_image: {
            title: 'ローカル画像をアップロード',
            button:
              '画像ファイルをここにドラッグして、或いはクリックしてアップロード',
          },
          edit_image: {
            title: '画像編集',
            confirm: '更新',
            cancel: 'キャンセル',
            form: {
              src: '画像リンク',
              alt: '備考',
              width: '広さ',
              height: '高さ',
            },
          },
        },
      },
      Iframe: {
        tooltip: '動画挿入',
        control: {
          title: '動画挿入',
          placeholder: 'リンクを入力',
          confirm: '挿入',
          cancel: 'キャンセル',
        },
      },
      BulletList: {
        tooltip: '箇条書き',
      },
      OrderedList: {
        tooltip: '順序付きリスト',
      },
      TodoList: {
        tooltip: 'タスクリスト',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: '左寄せ',
          },
          align_center: {
            tooltip: '中央寄せ',
          },
          align_right: {
            tooltip: '右寄せ',
          },
          align_justify: {
            tooltip: '両端揃え',
          },
        },
      },
      FontType: {
        tooltip: 'フォント',
      },
      FontSize: {
        tooltip: '文字サイズ',
        default: 'デフォルト',
      },
      TextColor: {
        tooltip: '文字色',
      },
      TextHighlight: {
        tooltip: 'テキストハイライト',
      },
      LineHeight: {
        tooltip: '行間',
      },
      Table: {
        tooltip: 'テーブル',
        buttons: {
          insert_table: 'テーブルを挿入',
          add_column_before: '左側に列を挿入',
          add_column_after: '右側に列を挿入',
          delete_column: '列を削除',
          add_row_before: '上に行を挿入',
          add_row_after: '下に行を挿入',
          delete_row: '行を削除',
          merge_cells: 'セル結合',
          split_cell: 'セル分割',
          delete_table: 'テーブルを削除',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'インデント',
          },
          outdent: {
            tooltip: 'アウトデント',
          },
        },
      },
      FormatClear: {
        tooltip: 'フォーマットを取る',
      },
      HorizontalRule: {
        tooltip: '水平線',
      },
      History: {
        tooltip: {
          undo: '元に戻す',
          redo: 'やり直し',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: '全画面',
          exit_fullscreen: 'フルスクリーンをキャンセル',
        },
      },
      Print: {
        tooltip: 'プリント',
      },
      Preview: {
        tooltip: 'プレビュー',
        dialog: {
          title: 'プレビュー',
        },
      },
      SelectAll: {
        tooltip: '全選択',
      },
      CodeView: {
        tooltip: 'ソースコード',
      },
    },
    characters: '文字数',
  },
};
