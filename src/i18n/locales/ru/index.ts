export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Полужирный',
      },
      Underline: {
        tooltip: 'Подчеркнутый',
      },
      Italic: {
        tooltip: 'Курсив',
      },
      Strike: {
        tooltip: 'Зачеркнутый',
      },
      Heading: {
        tooltip: 'Заголовок',
        buttons: {
          paragraph: 'Параграф',
          heading: 'Заголовок',
        }
      },
      Blockquote: {
        tooltip: 'Цитата',
      },
      CodeBlock: {
        tooltip: 'Блок кода',
      },
      Link: {
        add: {
          tooltip: 'Добавить ссылку',
          control: {
            title: 'Добавить ссылку',
            href: 'Адрес',
            open_in_new_tab: 'Открыть в новой вкладке',
            confirm: 'Применить',
            cancel: 'Отменить',
          },
        },
        edit: {
          tooltip: 'Редактировать ссылку',
          control: {
            title: 'Редактировать ссылку',
            href: 'Адрес',
            open_in_new_tab: 'Открыть в новой вкладке',
            confirm: 'Обновить',
            cancel: 'Отменить',
          },
        },
        unlink: {
          tooltip: 'Удалить ссылку',
        },
        open: {
          tooltip: 'Открыть ссылку',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Вставить картинку',
            external: 'Вставить картинку по ссылке',
            upload: 'Загрузить картинку',
          },
          remove_image: {
            tooltip: 'Удалить',
          },
          image_options: {
            tooltip: 'Опции изображения',
          },
          display: {
            tooltip: 'Положение',
            inline: 'В тексте',
            block: 'Обтекание текстом',
            left: 'Слева',
            right: 'Справа',
          },
        },
        control: {
          insert_by_url: {
            title: 'Вставить картинку',
            placeholder: 'Адрес картинки',
            confirm: 'Вставить',
            cancel: 'Отменить',
            invalid_url: 'Пожалуйста введите правильный адрес',
          },
          upload_image: {
            title: 'Загрузить картинку',
            button: 'Выберите файл изображения или перетащите сюда',
          },
          edit_image: {
            title: 'Редактировать изображение',
            confirm: 'Обновить',
            cancel: 'Отменить',
            form: {
              src: 'Адрес картинки',
              alt: 'Альтернативный текст',
              width: 'Ширина',
              height: 'Высота',
            },
          },
        },
      },
      Iframe: {
        tooltip: 'Вставить видео',
        control: {
          title: 'Вставить видео',
          placeholder: 'Адрес',
          confirm: 'Вставить',
          cancel: 'Отменить',
        },
      },
      BulletList: {
        tooltip: 'Маркированный список',
      },
      OrderedList: {
        tooltip: 'Нумерованный список',
      },
      TodoList: {
        tooltip: 'Список задач',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Выровнять по левому краю',
          },
          align_center: {
            tooltip: 'Выровнять по центру',
          },
          align_right: {
            tooltip: 'Выровнять по правому краю',
          },
          align_justify: {
            tooltip: 'Выровнять по ширине',
          },
        },
      },
      FontType: {
        tooltip: 'Шрифт',
      },
      FontSize: {
        tooltip: 'Размер шрифта',
        default: 'По умолчанию',
      },
      TextColor: {
        tooltip: 'Цвет текста',
      },
      TextHighlight: {
        tooltip: 'Цвет выделения текста',
      },
      LineHeight: {
        tooltip: 'Интервал',
      },
      Table: {
        tooltip: 'Таблица',
        buttons: {
          insert_table: 'Вставить таблицу',
          add_column_before: 'Добавить столбец слева',
          add_column_after: 'Добавить столбец справа',
          delete_column: 'Удалить столбец',
          add_row_before: 'Добавить строку сверху',
          add_row_after: 'Добавить строку снизу',
          delete_row: 'Удалить строку',
          merge_cells: 'Объединить ячейки',
          split_cell: 'Разделить ячейки',
          delete_table: 'Удалить таблицу',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Увеличить отступ',
          },
          outdent: {
            tooltip: 'Уменьшить отступ',
          },
        },
      },
      FormatClear: {
        tooltip: 'Очистить форматирование',
      },
      HorizontalRule: {
        tooltip: 'Горизонтальная линия',
      },
      History: {
        tooltip: {
          undo: 'Отменить',
          redo: 'Повторить',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Полноэкранный режим',
          exit_fullscreen: 'Выйти из полноэкранного режима',
        },
      },
      Print: {
        tooltip: 'Печать',
      },
      Preview: {
        tooltip: 'Предварительный просмотр',
        dialog: {
          title: 'Предварительный просмотр',
        },
      },
      SelectAll: {
        tooltip: 'Выделить все',
      },
      CodeView: {
        tooltip: 'Просмотр кода',
      },
    },
    characters: 'Количество символов',
  },
};
