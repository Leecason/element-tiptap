export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Fett',
      },
      Underline: {
        tooltip: 'Unterstrichen',
      },
      Italic: {
        tooltip: 'Kursiv',
      },
      Strike: {
        tooltip: 'Durchgestrichen',
      },
      Heading: {
        tooltip: 'Überschrift',
        buttons: {
          paragraph: 'Absatz',
          heading: 'Überschrift',
        }
      },
      Blockquote: {
        tooltip: 'Blockzitat',
      },
      CodeBlock: {
        tooltip: 'Codeblock',
      },
      Link: {
        add: {
          tooltip: 'Link hinzufügen',
          control: {
            title: 'Link hinzufügen',
            placeholder: 'Link',
            confirm: 'Hinzufügen',
            cancel: 'Abbrechen',
          },
        },
        edit: {
          tooltip: 'Link bearbeiten',
          control: {
            title: 'Link bearbeiten',
            placeholder: 'Link',
            confirm: 'Speichern',
            cancel: 'Abbrechen',
          },
        },
        unlink: {
          tooltip: 'Link entfernen',
        },
        open: {
          tooltip: 'Link öffnen',
        },
      },
      Image: {
        tooltip: 'Bild einfügen',
        buttons: {
          insert_by_url: 'Bild von URL einfügen',
          upload_image: 'Bild hochladen',
        },
        control: {
          insert_by_url: {
            title: 'Bild einfügen',
            placeholder: 'URL des Bildes',
            confirm: 'Einfügen',
            cancel: 'Abbrechen',
            invalid_url: 'Bitte geben Sie eine korrekte URL ein',
          },
          upload_image: {
            title: 'Bild hochladen',
            button: 'Wählen Sie ein Bild aus oder ziehen Sie ein Bild hierher',
          },
        },
      },
      Iframe: {
        tooltip: 'Video einfügen',
        control: {
          title: 'Video einfügen',
          placeholder: 'Link',
          confirm: 'Einfügen',
          cancel: 'Abbrechen',
        },
      },
      BulletList: {
        tooltip: 'Aufzählungsliste',
      },
      OrderedList: {
        tooltip: 'Nummerierte Liste',
      },
      TodoList: {
        tooltip: 'Erledigungsliste',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Linksbündig',
          },
          align_center: {
            tooltip: 'Zentriert',
          },
          align_right: {
            tooltip: 'Rechtsbündig',
          },
          align_justify: {
            tooltip: 'Blocksatz',
          },
        },
      },
      TextColor: {
        tooltip: 'Textfarbe',
      },
      TextHighlight: {
        tooltip: 'Hervorhebungsfarbe',
      },
      LineHeight: {
        tooltip: 'Zeilenabstand',
      },
      Table: {
        tooltip: 'Tabelle',
        buttons: {
          insert_table: 'Tabelle einfügen',
          add_column_before: 'Spalte vorher einfügen',
          add_column_after: 'Spalte nachher einfügen',
          delete_column: 'Spalte löschen',
          add_row_before: 'Zeile vorher einfügen',
          add_row_after: 'Zeile nachher einfügen',
          delete_row: 'Zeile löschen',
          merge_cells: 'Zellen verbinden',
          split_cell: 'Zellen aufteilen',
          delete_table: 'Tabelle löschen',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Einzug vergrößern',
          },
          outdent: {
            tooltip: 'Einzug verringern',
          },
        },
      },
      FormatClear: {
        tooltip: 'Formattierung entfernen',
      },
      HorizontalRule: {
        tooltip: 'Horizontale Linie',
      },
      History: {
        tooltip: {
          undo: 'Rückgängig',
          redo: 'Wiederholen',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Vollbild',
          exit_fullscreen: 'Vollbild verlassen',
        },
      },
      Print: {
        tooltip: 'Drucken',
      },
      Preview: {
        tooltip: 'Vorschau',
        dialog: {
          title: 'Vorschau',
        },
      },
      SelectAll: {
        tooltip: 'Alles auswählen',
      },
    },
    characters: 'Zeichen',
  },
};
