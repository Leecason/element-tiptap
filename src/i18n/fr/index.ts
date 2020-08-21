export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Gras',
      },
      Underline: {
        tooltip: 'Souligné',
      },
      Italic: {
        tooltip: 'Italique',
      },
      Strike: {
        tooltip: 'Barré',
      },
      Heading: {
        tooltip: 'Titre',
        buttons: {
          paragraph: 'Paragraphe',
          heading: 'Titre',
        }
      },
      Blockquote: {
        tooltip: 'Citation',
      },
      CodeBlock: {
        tooltip: 'Bloc de code',
      },
      Link: {
        add: {
          tooltip: 'Appliquer le lien',
          control: {
            title: 'Appliquer le lien',
            href: 'Cible du lien',
            open_in_new_tab: 'Ouvrir dans un nouvel onglet',
            confirm: 'Appliquer',
            cancel: 'Annuler',
          },
        },
        edit: {
          tooltip: 'Editer le lien',
          control: {
            title: 'Editer le lien',
            href: 'Cible du lien',
            open_in_new_tab: 'Ouvrir dans un nouvel onglet',
            confirm: 'Mettre à jour',
            cancel: 'Annuler',
          },
        },
        unlink: {
          tooltip: 'Supprimer le lien',
        },
        open: {
          tooltip: 'Ouvrir le lien',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Insérer une image',
            external: 'Insérer une image via un lien',
            upload: 'Télécharger une image',
          },
          remove_image: {
            tooltip: 'Retirer',
          },
          image_options: {
            tooltip: 'Options de l\'image',
          },
          display: {
            tooltip: 'Affichage',
            inline: 'En ligne',
            block: 'Rupture du texte',
            left: 'Floter à gauche',
            right: 'Floter à droite',
          },
        },
        control: {
          insert_by_url: {
            title: 'Insérer une image',
            placeholder: 'Lien de l\'image',
            confirm: 'Insérer',
            cancel: 'Annuler',
            invalid_url: 'Lien de l\'image incorrect, merci de corriger',
          },
          upload_image: {
            title: 'Télécharger une image',
            button: 'Choisir une image ou déposer celle-ci ici',
          },
          edit_image: {
            title: 'Editer l\'image',
            confirm: 'Mettre à jour',
            cancel: 'Annuler',
            form: {
              src: 'Lien de l\'image',
              alt: 'Texte alternatif',
              width: 'Largeur',
              height: 'Hauteur',
            },
          },
        },
      },
      Iframe: {
        tooltip: 'Insérer une video',
        control: {
          title: 'Insérer une video',
          placeholder: 'Lien',
          confirm: 'Insérer',
          cancel: 'Annuler',
        },
      },
      BulletList: {
        tooltip: 'Liste à puces',
      },
      OrderedList: {
        tooltip: 'Liste ordonnée',
      },
      TodoList: {
        tooltip: 'Liste de choses à faire',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Aligner à gauche',
          },
          align_center: {
            tooltip: 'Aigner au centre',
          },
          align_right: {
            tooltip: 'Aligner à droite',
          },
          align_justify: {
            tooltip: 'Justifier',
          },
        },
      },
      FontType: {
        tooltip: 'Police de caractère',
      },
      FontSize: {
        tooltip: 'Taille de la police',
        default: 'Par défaut',
      },
      TextColor: {
        tooltip: 'Couleur du texte',
      },
      TextHighlight: {
        tooltip: 'Texte surligné',
      },
      LineHeight: {
        tooltip: 'Hauteur de ligne',
      },
      Table: {
        tooltip: 'Tableau',
        buttons: {
          insert_table: 'Insérer un tableau',
          add_column_before: 'Ajouter une colonne avant',
          add_column_after: 'Ajouter une colonne après',
          delete_column: 'Supprimer une colonne',
          add_row_before: 'Ajouter une ligne avant',
          add_row_after: 'Ajouter une ligna après',
          delete_row: 'Supprimer une ligne',
          merge_cells: 'Fusionner les cellules',
          split_cell: 'Diviser la cellule',
          delete_table: 'Supprimer le tableau',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Retrait positif',
          },
          outdent: {
            tooltip: 'Retrait négatif',
          },
        },
      },
      FormatClear: {
        tooltip: 'Supprimer le formatage',
      },
      HorizontalRule: {
        tooltip: 'Ligne horizontal',
      },
      History: {
        tooltip: {
          undo: 'Annuler',
          redo: 'Refaire',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Plein écran',
          exit_fullscreen: 'Sortir du plein écran',
        },
      },
      Print: {
        tooltip: 'Impression',
      },
      Preview: {
        tooltip: 'Prévisualisation',
        dialog: {
          title: 'Prévisualisation',
        },
      },
      SelectAll: {
        tooltip: 'Tout sélectionner',
      },
      CodeView: {
        tooltip: 'Voir le code source',
      },
    },
    characters: 'Caractères',
  },
};
