export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'Negrita',
      },
      Underline: {
        tooltip: 'Subrayado',
      },
      Italic: {
        tooltip: 'Cursiva',
      },
      Strike: {
        tooltip: 'Texto tachado',
      },
      Heading: {
        tooltip: 'Encabezado',
        buttons: {
          paragraph: 'Párrafo',
          heading: 'Encabezado',
        }
      },
      Blockquote: {
        tooltip: 'Bloque de cita',
      },
      CodeBlock: {
        tooltip: 'Bloque de código',
      },
      Link: {
        add: {
          tooltip: 'Crear enlace',
          control: {
            title: 'Crear enlace',
            href: 'Href',
            open_in_new_tab: 'Abrir en una pestaña nueva',
            confirm: 'Crear',
            cancel: 'Cancelar',
          },
        },
        edit: {
          tooltip: 'Editar enlace',
          control: {
            title: 'Editar enlace',
            href: 'Href',
            open_in_new_tab: 'Abrir en una pestaña nueva',
            confirm: 'Actualizar',
            cancel: 'Cancelar',
          },
        },
        unlink: {
          tooltip: 'Desenlazar',
        },
        open: {
          tooltip: 'Abrir enlace',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'Insertar imagen',
            external: 'Insertar imagen desde Url',
            upload: 'Cargar imagen',
          },
          remove_image: {
            tooltip: 'Eliminar',
          },
          image_options: {
            tooltip: 'Opciones de imagen',
          },
          display: {
            tooltip: 'Visualización',
            inline: 'En línea',
            block: 'Bloque',
            left: 'Flotar a la izquierda',
            right: 'Flotar a la derecha',
          },
        },
        control: {
          insert_by_url: {
            title: 'Insertar imagen',
            placeholder: 'Url de la imagen',
            confirm: 'Insertar',
            cancel: 'Cancelar',
            invalid_url: 'Por favor introduce una Url válida',
          },
          upload_image: {
            title: 'Cargar imagen',
            button: 'Selecciona una imagen o arrástrala aquí',
          },
          edit_image: {
            title: 'Editar imagen',
            confirm: 'Actualizar',
            cancel: 'Cancelar',
            form: {
              src: 'Url de la imagen',
              alt: 'Texto alternativo',
              width: 'Ancho',
              height: 'Alto',
            },
          },
        },
      },
      Iframe: {
        tooltip: 'Insertar vídeo',
        control: {
          title: 'Insertar vídeo',
          placeholder: 'Href',
          confirm: 'Insertar',
          cancel: 'Cancelar',
        },
      },
      BulletList: {
        tooltip: 'Lista desordenada',
      },
      OrderedList: {
        tooltip: 'Lista ordenada',
      },
      TodoList: {
        tooltip: 'Lista de tareas',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'Alinear a la izquierda',
          },
          align_center: {
            tooltip: 'Centrar texto',
          },
          align_right: {
            tooltip: 'Alinear a la derecha',
          },
          align_justify: {
            tooltip: 'Texto justificado',
          },
        },
      },
      FontType: {
        tooltip: 'Fuente',
      },
      FontSize: {
        tooltip: 'Tamaño de fuente',
        default: 'por defecto',
      },
      TextColor: {
        tooltip: 'Color de texto',
      },
      TextHighlight: {
        tooltip: 'Resaltar texto',
      },
      LineHeight: {
        tooltip: 'Altura de línea',
      },
      Table: {
        tooltip: 'Tabla',
        buttons: {
          insert_table: 'Insertar tabla',
          add_column_before: 'Añadir columna antes',
          add_column_after: 'Añadir columna después',
          delete_column: 'Eliminar columna',
          add_row_before: 'Añadir fila antes',
          add_row_after: 'Añadir fila después',
          delete_row: 'Eliminar fila',
          merge_cells: 'Fusionar celdas',
          split_cell: 'Separar celda',
          delete_table: 'Eliminar la tabla',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'Indentar',
          },
          outdent: {
            tooltip: 'Desindentar',
          },
        },
      },
      FormatClear: {
        tooltip: 'Borrar formato',
      },
      HorizontalRule: {
        tooltip: 'Separador horizontal',
      },
      History: {
        tooltip: {
          undo: 'Deshacer',
          redo: 'Rehacer',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'Pantalla completa',
          exit_fullscreen: 'Salir de pantalla completa',
        },
      },
      Print: {
        tooltip: 'Imprimir',
      },
      Preview: {
        tooltip: 'Vista previa',
        dialog: {
          title: 'Vista previa',
        },
      },
      SelectAll: {
        tooltip: 'Seleccionar todo',
      },
      CodeView: {
        tooltip: 'Vista de código',
      },
    },
    characters: 'Caracteres',
  },
};
