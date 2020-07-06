export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: '粗體',
      },
      Underline: {
        tooltip: '底線',
      },
      Italic: {
        tooltip: '斜體',
      },
      Strike: {
        tooltip: '刪除線',
      },
      Heading: {
        tooltip: '標題',
        buttons: {
          paragraph: '段落',
          heading: '標題',
        }
      },
      Blockquote: {
        tooltip: '引用',
      },
      CodeBlock: {
        tooltip: '程式碼',
      },
      Link: {
        add: {
          tooltip: '新增超連結',
          control: {
            title: '新增超連結',
            href: '超連結',
            open_in_new_tab: '在新分頁開啟',
            confirm: '新增',
            cancel: '取消',
          },
        },
        edit: {
          tooltip: '編輯超連結',
          control: {
            title: '編輯超連結',
            href: '超連結',
            open_in_new_tab: '在新分頁開啟',
            confirm: '更新',
            cancel: '取消',
          },
        },
        unlink: {
          tooltip: '取消超連結',
        },
        open: {
          tooltip: '打開超連結',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: '新增圖片',
            external: '新增網路圖片',
            upload: '上傳本機圖片',
          },
          remove_image: {
            tooltip: '刪除',
          },
          image_options: {
            tooltip: '圖片屬性',
          },
          display: {
            tooltip: '佈局',
            inline: '内聯',
            block: '塊',
            left: '左浮動',
            right: '右浮動',
          },
        },
        control: {
          insert_by_url: {
            title: '新增網路圖片',
            placeholder: '輸入超連結',
            confirm: '新增',
            cancel: '取消',
            invalid_url: '請輸入正確的圖片連結',
          },
          upload_image: {
            title: '上傳本機圖片',
            button: '將圖片文件拖到此處或者點擊上傳',
          },
          edit_image: {
            title: '編輯圖片',
            confirm: '更新',
            cancel: '取消',
            form: {
              src: '圖片連結',
              alt: '替代文字',
              width: '寬度',
              height: '高度',
            },
          },
        },
      },
      Iframe: {
        tooltip: '新增影片',
        control: {
          title: '新增影片',
          placeholder: '輸入超連結',
          confirm: '確認',
          cancel: '取消',
        },
      },
      BulletList: {
        tooltip: '無序列表',
      },
      OrderedList: {
        tooltip: '有序列表',
      },
      TodoList: {
        tooltip: '任務列表',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: '置左',
          },
          align_center: {
            tooltip: '置中',
          },
          align_right: {
            tooltip: '置右',
          },
          align_justify: {
            tooltip: '水平對齊',
          },
        },
      },
      FontType: {
        tooltip: '字體',
      },
      FontSize: {
        tooltip: '字體大小',
        default: '默認',
      },
      TextColor: {
        tooltip: '文字顏色',
      },
      TextHighlight: {
        tooltip: '文字反白',
      },
      LineHeight: {
        tooltip: '行距',
      },
      Table: {
        tooltip: '表格',
        buttons: {
          insert_table: '新增表格',
          add_column_before: '向左新增一列',
          add_column_after: '向右新增一列',
          delete_column: '刪除列',
          add_row_before: '向上新增一行',
          add_row_after: '向下新增一行',
          delete_row: '删除行',
          merge_cells: '合併',
          split_cell: '分離儲存格',
          delete_table: '删除表格',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: '增加縮排',
          },
          outdent: {
            tooltip: '减少縮排',
          },
        },
      },
      FormatClear: {
        tooltip: '清除格式',
      },
      HorizontalRule: {
        tooltip: '分隔線',
      },
      History: {
        tooltip: {
          undo: '復原',
          redo: '取消復原',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: '全螢幕',
          exit_fullscreen: '退出全螢幕',
        },
      },
      Print: {
        tooltip: '列印',
      },
      Preview: {
        tooltip: '預覽',
        dialog: {
          title: '預覽',
        },
      },
      SelectAll: {
        tooltip: '全選',
      },
      CodeView: {
        tooltip: '查看原始碼',
      },
    },
    characters: '字數',
  },
};
