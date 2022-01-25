export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Negrito',
      },
      Underline: {
        tooltip: 'Sublinhar',
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
            href: 'Endereço',
            open_in_new_tab: 'Abrir num novo separador',
            confirm: 'Inserir',
            cancel: 'Cancelar',
          },
        },
        edit: {
          tooltip: 'Alterar Link',
          control: {
            title: 'Alterar Link',
            href: 'Endereço',
            open_in_new_tab: 'Abrir num novo separador',
            confirm: 'Alterar',
            cancel: 'Cancelar',
          },
        },
        unlink: {
          tooltip: 'Remover Link',
        },
        open: {
          tooltip: 'Abrir Link',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Inserir imagem',
            external: 'Inserir imagem por link',
            upload: 'Carregar imagem',
          },
          remove_image: {
            tooltip: 'Remover',
          },
          image_options: {
            tooltip: 'Opções da imagem',
          },
          display: {
            tooltip: 'Visualização',
            inline: 'Em Linha',
            block: 'Quebra de Texto',
            left: 'Alinhar à Esquerda',
            right: 'Alinhar à Direita',
          },
        },
        control: {
          insert_by_url: {
            title: 'Inserir imagem',
            placeholder: 'Link da imagem',
            confirm: 'Inserir',
            cancel: 'Cancelar',
            invalid_url: 'Por favor, coloque um link correto',
          },
          upload_image: {
            title: 'Carregar imagem',
            button: 'Escolha uma imagem ou arraste para aqui',
          },
          edit_image: {
            title: 'Editar imagem',
            confirm: 'Alterar',
            cancel: 'Cancelar',
            form: {
              src: 'Link da imagem',
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
          placeholder: 'Endereço',
          confirm: 'Inserir',
          cancel: 'Cancelar',
        },
      },
      BulletList: {
        tooltip: 'Lista de Marcadores',
      },
      OrderedList: {
        tooltip: 'Lista de Numeração',
      },
      TodoList: {
        tooltip: 'Lista de Tarefas',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Alinhar à Esquerda',
          },
          align_center: {
            tooltip: 'Centralizar Texto',
          },
          align_right: {
            tooltip: 'Alinhar à Direita',
          },
          align_justify: {
            tooltip: 'Justificar Texto',
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
        tooltip: 'Cor da Fonte',
      },
      TextHighlight: {
        tooltip: 'Cor de Realce do Texto',
      },
      LineHeight: {
        tooltip: 'Espaçamento entre Linhas e Parágrafos',
      },
      Table: {
        tooltip: 'Tabela',
        buttons: {
          insert_table: 'Inserir Tabela',
          add_column_before: 'Adicionar coluna antes',
          add_column_after: 'Adicionar coluna depois',
          delete_column: 'Remover coluna',
          add_row_before: 'Adicionar linha antes',
          add_row_after: 'Adicionar linha depois',
          delete_row: 'Remover linha',
          merge_cells: 'Combinar células',
          split_cell: 'Dividir célula',
          delete_table: 'Remover tabela',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Aumentar indentação',
          },
          outdent: {
            tooltip: 'Diminuir indentação',
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
          fullscreen: 'Ecrã inteiro',
          exit_fullscreen: 'Fechar ecrã inteiro',
        },
      },
      Print: {
        tooltip: 'Imprimir',
      },
      Preview: {
        tooltip: 'Pré-visualizar',
        dialog: {
          title: 'Pré-visualizar',
        },
      },
      SelectAll: {
        tooltip: 'Selecionar Todos',
      },
      CodeView: {
        tooltip: 'Ver Código',
      },
    },
    characters: 'Caracteres',
  },
};
