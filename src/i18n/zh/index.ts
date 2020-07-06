export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: '粗体',
      },
      Underline: {
        tooltip: '下划线',
      },
      Italic: {
        tooltip: '斜体',
      },
      Strike: {
        tooltip: '中划线',
      },
      Heading: {
        tooltip: '标题',
        buttons: {
          paragraph: '正文',
          heading: '标题',
        }
      },
      Blockquote: {
        tooltip: '引用',
      },
      CodeBlock: {
        tooltip: '代码块',
      },
      Link: {
        add: {
          tooltip: '添加链接',
          control: {
            title: '添加链接',
            href: '链接',
            open_in_new_tab: '在新标签页中打开',
            confirm: '添加',
            cancel: '取消',
          },
        },
        edit: {
          tooltip: '编辑链接',
          control: {
            title: '编辑链接',
            href: '链接',
            open_in_new_tab: '在新标签页中打开',
            confirm: '更新',
            cancel: '取消',
          },
        },
        unlink: {
          tooltip: '取消链接',
        },
        open: {
          tooltip: '打开链接',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: '插入图片',
            external: '插入网络图片',
            upload: '上传本地图片',
          },
          remove_image: {
            tooltip: '删除',
          },
          image_options: {
            tooltip: '图片属性',
          },
          display: {
            tooltip: '布局',
            inline: '内联',
            block: '断行',
            left: '左浮动',
            right: '右浮动',
          },
        },
        control: {
          insert_by_url: {
            title: '插入网络图片',
            placeholder: '输入链接',
            confirm: '插入',
            cancel: '取消',
            invalid_url: '请输入正确的图片链接',
          },
          upload_image: {
            title: '上传本地图片',
            button: '将图片文件拖到此处或者点击上传',
          },
          edit_image: {
            title: '编辑图片',
            confirm: '更新',
            cancel: '取消',
            form: {
              src: '图片链接',
              alt: '备用文本描述',
              width: '宽度',
              height: '高度',
            },
          },
        },
      },
      Iframe: {
        tooltip: '插入视频',
        control: {
          title: '插入视频',
          placeholder: '输入链接',
          confirm: '插入',
          cancel: '取消',
        },
      },
      BulletList: {
        tooltip: '无序列表',
      },
      OrderedList: {
        tooltip: '有序列表',
      },
      TodoList: {
        tooltip: '任务列表',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: '左对齐',
          },
          align_center: {
            tooltip: '居中对齐',
          },
          align_right: {
            tooltip: '右对齐',
          },
          align_justify: {
            tooltip: '两端对齐',
          },
        },
      },
      FontType: {
        tooltip: '字体',
      },
      FontSize: {
        tooltip: '字号',
        default: '默认',
      },
      TextColor: {
        tooltip: '文本颜色',
      },
      TextHighlight: {
        tooltip: '文本高亮',
      },
      LineHeight: {
        tooltip: '行距',
      },
      Table: {
        tooltip: '表格',
        buttons: {
          insert_table: '插入表格',
          add_column_before: '向左插入一列',
          add_column_after: '向右插入一列',
          delete_column: '删除列',
          add_row_before: '向上插入一行',
          add_row_after: '向下插入一行',
          delete_row: '删除行',
          merge_cells: '合并单元格',
          split_cell: '拆分单元格',
          delete_table: '删除表格',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: '增加缩进',
          },
          outdent: {
            tooltip: '减少缩进',
          },
        },
      },
      FormatClear: {
        tooltip: '清除格式',
      },
      HorizontalRule: {
        tooltip: '分隔线',
      },
      History: {
        tooltip: {
          undo: '撤销',
          redo: '重做',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: '全屏',
          exit_fullscreen: '退出全屏',
        },
      },
      Print: {
        tooltip: '打印',
      },
      Preview: {
        tooltip: '预览',
        dialog: {
          title: '预览',
        },
      },
      SelectAll: {
        tooltip: '全选',
      },
      CodeView: {
        tooltip: '查看源代码',
      },
    },
    characters: '字数',
  },
};
