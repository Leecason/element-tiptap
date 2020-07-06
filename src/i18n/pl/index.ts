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
        add: {
          tooltip: 'Dodaj link',
          control: {
            title: 'Dodaj Link',
            href: 'Źródło',
            open_in_new_tab: 'Otwórz w nowej karcie',
            confirm: 'Dodaj',
            cancel: 'Anuluj',
          },
        },
        edit: {
          tooltip: 'Edytuj link',
          control: {
            title: 'Edytuj link',
            href: 'Źródło',
            open_in_new_tab: 'Otwórz w nowej karcie',
            confirm: 'aktualizacja',
            cancel: 'Anuluj',
          },
        },
        unlink: {
          tooltip: 'Odczepić',
        },
        open: {
          tooltip: 'Otwórz link',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Dodaj obraz',
            external: 'Dodaj obraz online',
            upload: 'Dodaj obraz z dysku',
          },
          remove_image: {
            tooltip: 'Usuń',
          },
          image_options: {
            tooltip: 'Opcje obrazu',
          },
          display: {
            tooltip: 'Pokaz',
            inline: 'Inline',
            block: 'Podziel tekst',
            left: 'Przesuń w lewo',
            right: 'Płyń w prawo',
          },
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
          edit_image: {
            title: 'Edytuj obraz',
            confirm: 'Aktualizacja',
            cancel: 'Zamknij',
            form: {
              src: 'URL obrazu',
              alt: 'Alternatywny Tekst',
              width: 'Szerokość',
              height: 'Wysokość',
            },
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
      FontType: {
        tooltip: 'Rodzina czcionek',
      },
      FontSize: {
        tooltip: 'Rozmiar czcionki',
        default: 'domyślna',
      },
      TextColor: {
        tooltip: 'Kolor tekstu',
      },
      TextHighlight: {
        tooltip: 'Podświetlenie tekstu',
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
      Print: {
        tooltip: 'Drukuj',
      },
      Preview: {
        tooltip: 'Podgląd',
        dialog: {
          title: 'Podgląd',
        },
      },
      SelectAll: {
        tooltip: 'Zaznacz wszystko',
      },
      CodeView: {
        tooltip: 'Widok kodu',
      },
    },
    characters: 'Znaki',
  },
};
