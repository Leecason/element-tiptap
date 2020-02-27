export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Pogrubienie',
      },
      Underline: {
        tooltip: 'Podkreślenie',
      },
      Italic: {
        tooltip: 'Kursywa',
      },
      Strike: {
        tooltip: 'Przekreślenie',
      },
      Heading: {
        tooltip: 'Nagłówek',
        buttons: {
          paragraph: 'Paragraf',
          heading: 'Nagłówek',
        }
      },
      Blockquote: {
        tooltip: 'Cytat',
      },
      CodeBlock: {
        tooltip: 'Kod',
      },
      Link: {
        tooltip: 'Dodaj link',
        control: {
          title: 'Link',
          placeholder: 'Źródło',
          confirm: 'Dodaj',
          cancel: 'Zamknij',
        },
      },
      Image: {
        tooltip: 'Dodaj obraz',
        buttons: {
          insert_by_url: 'Dodaj obraz online',
          upload_image: 'Dodaj obraz z dysku',
        },
        control: {
          insert_by_url: {
            title: 'Dodawanie obrazu online',
            placeholder: 'URL obrazu',
            confirm: 'Dodaj',
            cancel: 'Zamknij',
            invalid_url: 'Proszę podać prawidłowy link prowadzący do obrazu',
          },
          upload_image: {
            title: 'Dodawanie obrazu z dysku',
            button: 'Wskaż obraz lub przeciągnij go tutaj',
          },
        },
      },
      Iframe: {
        tooltip: 'Dodaj film',
        control: {
          title: 'Dodaj film',
          placeholder: 'URL filmu',
          confirm: 'Dodaj',
          cancel: 'Zamknij',
        },
      },
      BulletList: {
        tooltip: 'Lista wypunktowana',
      },
      OrderedList: {
        tooltip: 'Lista uporządkowana',
      },
      TodoList: {
        tooltip: 'Lista rzeczy do zrobienia',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Wyrównaj do lewej',
          },
          align_center: {
            tooltip: 'Wyśrodkuj',
          },
          align_right: {
            tooltip: 'Wyrównaj do prawej',
          },
          align_justify: {
            tooltip: 'Wyjustuj',
          },
        },
      },
      TextColor: {
        tooltip: 'Kolor tekstu',
        reset: 'Wyczyść',
      },
      TextHighlight: {
        tooltip: 'Podświetlenie tekstu',
        reset: 'Przezroczysty',
      },
      LineHeight: {
        tooltip: 'Wysokość linii',
      },
      Table: {
        tooltip: 'Tabela',
        buttons: {
          insert_table: 'Dodaj tabelę',
          add_column_before: 'Dodaj kolumnę przed',
          add_column_afer: 'Dodaj kolumnę za',
          delete_column: 'Usuń kolumnę',
          add_row_before: 'Dodaj wiersz przed',
          add_row_after: 'Dodaj wiersz za',
          delete_row: 'Usuń wiersz',
          merge_cells: 'Połącz komórki',
          split_cell: 'Rozdziel komórki',
          delete_table: 'Usuń tabelę',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Zwiększ wcięcie',
          },
          outdent: {
            tooltip: 'Zmniejsz wcięcie',
          },
        },
      },
      FormatClear: {
        tooltip: 'Wyczyść formatowanie',
      },
      HorizontalRule: {
        tooltip: 'Linia pozioma',
      },
      History: {
        tooltip: {
          undo: 'Cofnij',
          redo: 'Powtórz',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Pełny ekran',
          exit_fullscreen: 'Zamknij pełny ekran',
        },
      },
    },
  },
};
