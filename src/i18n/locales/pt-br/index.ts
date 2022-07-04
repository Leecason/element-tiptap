export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Negrito',
      },
      Underline: {
        tooltip: 'Sublinhado',
      },
      Italic: {
        tooltip: 'Itálico',
      },
      Strike: {
        tooltip: 'Riscado',
      },
      Heading: {
        tooltip: 'Cabeçalho',
        buttons: {
          paragraph: 'Parágrafo',
          heading: 'Cabeçalho',
        }
      },
      Blockquote: {
        tooltip: 'Bloco de citação',
      },
      CodeBlock: {
        tooltip: 'Bloco de código',
      },
      Link: {
        add: {
          tooltip: 'Inserir Link',
          control: {
            title: 'Inserir Link',
            href: 'Link de Referência',
            open_in_new_tab: 'Abrir em nova aba',
            confirm: 'Inserir',
            cancel: 'Cancelar',
          },
        },
        edit: {
          tooltip: 'Editar link',
          control: {
            title: 'Editar Link',
            href: 'Link de Referência',
            open_in_new_tab: 'Abrir em nova aba',
            confirm: 'Alterar',
            cancel: 'Cancelar',
          },
        },
        unlink: {
          tooltip: 'Excluir',
        },
        open: {
          tooltip: 'Abrir link',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Inserir imagem',
            external: 'Inserir Imagem com Url',
            upload: 'Enviar Imagem',
          },
          remove_image: {
            tooltip: 'Remover',
          },
          image_options: {
            tooltip: 'Opções da Imagem',
          },
          display: {
            tooltip: 'Visualização',
            inline: 'Em Linha',
            block: 'Quebra de Texto',
            left: 'Para esquerda',
            right: 'Para direita',
          },
        },
        control: {
          insert_by_url: {
            title: 'Inserir imagem',
            placeholder: 'Url da imagem',
            confirm: 'Inserir',
            cancel: 'Cancelar',
            invalid_url: 'Por favor, entre com o link correto',
          },
          upload_image: {
            title: 'Enviar imagem',
            button: 'Escolha uma imagem ou arraste para cá',
          },
          edit_image: {
            title: 'Editar imagem',
            confirm: 'Alterar',
            cancel: 'Cancelar',
            form: {
              src: 'Imagem Url',
              alt: 'Texto alternativo',
              width: 'Largura',
              height: 'Altura',
            },
          },
        },
      },
      Iframe: {
        tooltip: 'Inserir vídeo',
        control: {
          title: 'Inserir vídeo',
          placeholder: 'Link de Referência',
          confirm: 'Inserir',
          cancel: 'Cancelar',
        },
      },
      BulletList: {
        tooltip: 'Lista de Marcadores',
      },
      OrderedList: {
        tooltip: 'Lista Enumerada',
      },
      TodoList: {
        tooltip: 'Lista de afazeres',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Alinhar a esquerda',
          },
          align_center: {
            tooltip: 'Alinhar ao centro',
          },
          align_right: {
            tooltip: 'Alinhar a direita',
          },
          align_justify: {
            tooltip: 'Alinhamento justificado',
          },
        },
      },
      FontType: {
        tooltip: 'Fonte',
      },
      FontSize: {
        tooltip: 'Tamnaho da Fonte',
        default: 'padrão',
      },
      TextColor: {
        tooltip: 'Cor do Texto',
      },
      TextHighlight: {
        tooltip: 'Cor de destaque',
      },
      LineHeight: {
        tooltip: 'Altura da Linha',
      },
      Table: {
        tooltip: 'Tabela',
        buttons: {
          insert_table: 'Inserir Tabela',
          add_column_before: 'Adicionar coluna antes',
          add_column_after: 'Adicionar coluna depois',
          delete_column: 'Deletar coluna',
          add_row_before: 'Adicionar linha antes',
          add_row_after: 'Adicionar linha depois',
          delete_row: 'Deletar linha',
          merge_cells: 'Mesclar células',
          split_cell: 'Dividir célula',
          delete_table: 'Deletar tabela',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Aumentar Recuo',
          },
          outdent: {
            tooltip: 'Diminuir Recuo',
          },
        },
      },
      FormatClear: {
        tooltip: 'Limpar formatação',
      },
      HorizontalRule: {
        tooltip: 'Linha horizontal',
      },
      History: {
        tooltip: {
          undo: 'Desafazer',
          redo: 'Refazer',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Tela cheia',
          exit_fullscreen: 'Fechar tela cheia',
        },
      },
      Print: {
        tooltip: 'Imprimir',
      },
      Preview: {
        tooltip: 'Pre visualizar',
        dialog: {
          title: 'Pre visualizar',
        },
      },
      SelectAll: {
        tooltip: 'Selecionar Todos',
      },
      CodeView: {
        tooltip: 'Visualização de Código',
      },
    },
    characters: 'Caracteres',
  },
};
