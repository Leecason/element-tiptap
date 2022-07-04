export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'מודגש',
      },
      Underline: {
        tooltip: 'קו תחתון',
      },
      Italic: {
        tooltip: 'הטה',
      },
      Strike: {
        tooltip: 'קו חוצה',
      },
      Heading: {
        tooltip: 'כותרת',
        buttons: {
          paragraph: 'פסקה',
          heading: 'כותרת',
        }
      },
      Blockquote: {
        tooltip: 'ציטוט',
      },
      CodeBlock: {
        tooltip: 'קוד',
      },
      Link: {
        add: {
          tooltip: 'החל קישור',
          control: {
            title: 'החל קישור',
            href: 'קישור',
            open_in_new_tab: 'פתח בחלון חדש',
            confirm: 'החל',
            cancel: 'ביטול',
          },
        },
        edit: {
          tooltip: 'ערוך קישור',
          control: {
            title: 'ערוך קישור',
            href: 'קישור',
            open_in_new_tab: 'פתח בחלון חדש',
            confirm: 'עידכון',
            cancel: 'ביטול',
          },
        },
        unlink: {
          tooltip: 'הסר קישור',
        },
        open: {
          tooltip: 'פתח קישור',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'הוספת תמונה',
            external: 'הוספת תמונה לפי קישור',
            upload: 'העלאת תמונה',
          },
          remove_image: {
            tooltip: 'הסר',
          },
          image_options: {
            tooltip: 'אפשרויות תמונה',
          },
          display: {
            tooltip: 'הצג',
            inline: 'בשורה',
            block: 'שבור טקסט',
            left: 'הצמד לשמאל',
            right: 'הצמד לימין',
          },
        },
        control: {
          insert_by_url: {
            title: 'הוספת תמונה',
            placeholder: 'קישור לתמונה',
            confirm: 'הוספה',
            cancel: 'ביטול',
            invalid_url: 'נא הזן קישור תקין',
          },
          upload_image: {
            title: 'העלאת תמונה',
            button: 'לחץ כאן לבחירת תמונה מתיקיה או גרור אותה הנה',
          },
          edit_image: {
            title: 'עריכה תמונה',
            confirm: 'עדכון',
            cancel: 'ביטול',
            form: {
              src: 'קישור לתמונה',
              alt: 'טקסט חלופי',
              width: 'רוחב',
              height: 'גובה',
            },
          },
        },
      },
      Iframe: {
        tooltip: 'הוספת סרטון',
        control: {
          title: 'הוספת סרטון',
          placeholder: 'קישור',
          confirm: 'הוספה',
          cancel: 'ביטול',
        },
      },
      BulletList: {
        tooltip: 'תבליטים',
      },
      OrderedList: {
        tooltip: 'מספור',
      },
      TodoList: {
        tooltip: 'רשימת משימות',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'ישר לשמאל',
          },
          align_center: {
            tooltip: 'ישר לאמצע',
          },
          align_right: {
            tooltip: 'ישר לימין',
          },
          align_justify: {
            tooltip: 'ישר לשני הצדדים',
          },
        },
      },
      FontType: {
        tooltip: 'גופן',
      },
      FontSize: {
        tooltip: 'גודל גופן',
        default: 'ברירת מחדל',
      },
      TextColor: {
        tooltip: 'צבע טקסט',
      },
      TextHighlight: {
        tooltip: 'צבע סימון טקסט',
      },
      LineHeight: {
        tooltip: 'גובה שורה',
      },
      Table: {
        tooltip: 'טבלה',
        buttons: {
          insert_table: 'הוסף טבלה',
          add_column_before: 'הוסף עמודה לפני',
          add_column_after: 'הוסף עמודה אחרי',
          delete_column: 'מחק עמודה',
          add_row_before: 'הוסף שורה לפני',
          add_row_after: 'הוסף שורה אחרי',
          delete_row: 'מחק שורה',
          merge_cells: 'מיזוג תאים',
          split_cell: 'פיצול תא',
          delete_table: 'מחיקת טבלה',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'בקטן כניסה',
          },
          outdent: {
            tooltip: 'הגדל כניסה',
          },
        },
      },
      FormatClear: {
        tooltip: 'נקה עיצוב',
      },
      HorizontalRule: {
        tooltip: 'קו אופקי',
      },
      History: {
        tooltip: {
          undo: 'הקודם',
          redo: 'הבא',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'מסך מלא',
          exit_fullscreen: 'יציאה ממסך מלא',
        },
      },
      Print: {
        tooltip: 'הדפס',
      },
      Preview: {
        tooltip: 'תצוגה מקדימה',
        dialog: {
          title: 'תצוגה מקדימה',
        },
      },
      SelectAll: {
        tooltip: 'בחר הכל',
      },
      CodeView: {
        tooltip: 'תצוגת קוד',
      },
    },
    characters: 'תווים',
  },
};
