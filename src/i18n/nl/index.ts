export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Vet',
      },
      Underline: {
        tooltip: 'Onderstrepen',
      },
      Italic: {
        tooltip: 'Cursief',
      },
      Strike: {
        tooltip: 'Doorhalen',
      },
      Heading: {
        tooltip: 'Hoofdstuk',
        buttons: {
          paragraph: 'Paragraaf',
          heading: 'Hoofdstuk',
        }
      },
      Blockquote: {
        tooltip: 'Citaat blokkeren',
      },
      CodeBlock: {
        tooltip: 'Codeblok',
      },
      Link: {
        add: {
          tooltip: 'Link toepassen',
          control: {
            title: 'Link toepassen',
            href: 'Link',
            open_in_new_tab: 'Openen in nieuw tabblad',
            confirm: 'Toepassen',
            cancel: 'Annuleren',
          },
        },
        edit: {
          tooltip: 'Link bewerken',
          control: {
            title: 'Link bewerken',
            href: 'Link',
            open_in_new_tab: 'Openen in nieuw tabblad',
            confirm: 'Bijwerken',
            cancel: 'Annuleren',
          },
        },
        unlink: {
          tooltip: 'Link verwijderen',
        },
        open: {
          tooltip: 'Link openen',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Afbeelding invoegen',
            external: 'Afbeelding invoegen via URL',
            upload: 'Afbeelding uploaden',
          },
          remove_image: {
            tooltip: 'Verwijderen',
          },
          image_options: {
            tooltip: 'Afbeeldingsopties',
          },
          display: {
            tooltip: 'Weergeven',
            inline: 'In tekstregel',
            block: 'Tekst afbreken',
            left: 'Links uitlijnen',
            right: 'Rechts uitlijnen',
          },
        },
        control: {
          insert_by_url: {
            title: 'Afbeelding invoegen',
            placeholder: 'URL van afbeelding',
            confirm: 'Invoegen',
            cancel: 'Annuleren',
            invalid_url: 'Vul een geldige URL in',
          },
          upload_image: {
            title: 'Afbeelding uploaden',
            button: 'Kies een afbeelding of sleep het hier',
          },
          edit_image: {
            title: 'Afbeelding bewerken',
            confirm: 'Bijwerken',
            cancel: 'Annuleren',
            form: {
              src: 'Afbeelding URL',
              alt: 'Alternatieve tekst',
              width: 'Breedte',
              height: 'Hoogte',
            },
          },
        },
      },
      Iframe: {
        tooltip: 'Video invoegen',
        control: {
          title: 'Video invoegen',
          placeholder: 'Link',
          confirm: 'Invoegen',
          cancel: 'Annuleren',
        },
      },
      BulletList: {
        tooltip: 'Opsommingslijst',
      },
      OrderedList: {
        tooltip: 'Genummerde lijst',
      },
      TodoList: {
        tooltip: 'Takenlijst',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Links uitlijnen',
          },
          align_center: {
            tooltip: 'Centreren',
          },
          align_right: {
            tooltip: 'Rechts uitlijnen',
          },
          align_justify: {
            tooltip: 'Tekst uitvullen',
          },
        },
      },
      FontType: {
        tooltip: 'Lettertype',
      },
      FontSize: {
        tooltip: 'Tekengrootte',
        default: 'Standaard',
      },
      TextColor: {
        tooltip: 'Tekstkleur',
      },
      TextHighlight: {
        tooltip: 'Tekst markeren',
      },
      LineHeight: {
        tooltip: 'Regelafstand',
      },
      Table: {
        tooltip: 'Tabel',
        buttons: {
          insert_table: 'Tabel invoegen',
          add_column_before: 'Kolom links invoegen',
          add_column_after: 'Kolom rechts invoegen',
          delete_column: 'Kolom verwijderen',
          add_row_before: 'Rij boven toevoegen',
          add_row_after: 'Rij onder toevoegen',
          delete_row: 'Rij verwijderen',
          merge_cells: 'Cellen samenvoegen',
          split_cell: 'Cellen splitsen',
          delete_table: 'Cellen verwijderen',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Inspringen',
          },
          outdent: {
            tooltip: 'Uitspringen',
          },
        },
      },
      FormatClear: {
        tooltip: 'Opmaak wissen',
      },
      HorizontalRule: {
        tooltip: 'Horizontale regel',
      },
      History: {
        tooltip: {
          undo: 'Ongedaan maken',
          redo: 'Herhalen',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Volledig scherm',
          exit_fullscreen: 'Volledig scherm sluiten',
        },
      },
      Print: {
        tooltip: 'Afdrukken',
      },
      Preview: {
        tooltip: 'Voorbeeld',
        dialog: {
          title: 'Voorbeeld',
        },
      },
      SelectAll: {
        tooltip: 'Selecteer alles',
      },
      CodeView: {
        tooltip: 'Codeweergave',
      },
    },
    characters: 'Karakters',
  },
};
