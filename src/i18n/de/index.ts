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
        tooltip: 'Zitat',
      },
      CodeBlock: {
        tooltip: 'Codeblock',
      },
      Link: {
        add: {
          tooltip: 'Link hinzufügen',
          control: {
            title: 'Link hinzufügen',
            href: 'Link',
            open_in_new_tab: 'Öffnen Sie in einem neuen Tab',
            confirm: 'Hinzufügen',
            cancel: 'Abbrechen',
          },
        },
        edit: {
          tooltip: 'Link bearbeiten',
          control: {
            title: 'Link bearbeiten',
            href: 'Link',
            open_in_new_tab: 'Öffnen Sie in einem neuen Tab',
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
        buttons: {
          insert_image: {
            tooltip: 'Bild einfügen',
            external: 'Bild von URL einfügen',
            upload: 'Bild hochladen',
          },
          remove_image: {
            tooltip: 'Entfernen',
          },
          image_options: {
            tooltip: 'Bildoptionen',
          },
          display: {
            tooltip: 'Textumbruch',
            inline: 'In der Zeile',
            block: 'Text teilen',
            left: 'Links',
            right: 'Rechts',
          },
        },
        control: {
          insert_by_url: {
            title: 'Bild einfügen',
            placeholder: 'Bild URL',
            confirm: 'Einfügen',
            cancel: 'Abbrechen',
            invalid_url: 'Diese URL hat ein ungültiges Format',
          },
          upload_image: {
            title: 'Bild hochladen',
            button: 'Wählen Sie ein Bild aus, oder ziehen Sie ein Bild auf dieses Feld',
          },
          edit_image: {
            title: 'Bild Bearbeiten',
            confirm: 'Speichern',
            cancel: 'Abbrechen',
            form: {
              src: 'Bild URL',
              alt: 'Alternativer Text (angezeigt beim Überfahren mit Maus)',
              width: 'Breite',
              height: 'Höhe',
            },
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
      FontType: {
        tooltip: 'Schriftfamilie',
      },
      FontSize: {
        tooltip: 'Schriftgröße',
        default: 'standard',
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
      CodeView: {
        tooltip: 'Codeansicht',
      },
    },
    characters: 'Zeichen',
  },
};
