export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: 'ตัวหนา',
      },
      Underline: {
        tooltip: 'ขีดเส้นใต้',
      },
      Italic: {
        tooltip: 'ตัวเอียง',
      },
      Strike: {
        tooltip: 'ขีดทับ',
      },
      Heading: {
        tooltip: 'หัวเรื่อง',
        buttons: {
          paragraph: 'ย่อหน้า',
          heading: 'หัวเรื่อง',
        }
      },
      Blockquote: {
        tooltip: 'บล็อกคำพูด',
      },
      CodeBlock: {
        tooltip: 'บล็อกโปรแกรม',
      },
      Link: {
        add: {
          tooltip: 'เพิ่มลิ้ง',
          control: {
            title: 'เพิ่มลิ้ง',
            href: 'อ้างอิง',
            open_in_new_tab: 'เปิดแท็ปใหม่',
            confirm: 'ตกลง',
            cancel: 'ยกเลิก',
          },
        },
        edit: {
          tooltip: 'แก้ไขลิ้ง',
          control: {
            title: 'แก้ไขลิ้ง',
            href: 'อ้างอิง',
            open_in_new_tab: 'เปิดแท็ปใหม่',
            confirm: 'อัพเดท',
            cancel: 'ยกเลิก',
          },
        },
        unlink: {
          tooltip: 'นำลิ้งออก',
        },
        open: {
          tooltip: 'เปิดลิ้ง',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: 'เพิ่มรูปภาพ',
            external: 'เพิ่มรูปภาพโดย Url',
            upload: 'อัพโหลดรูปภาพ',
          },
          remove_image: {
            tooltip: 'ลบ',
          },
          image_options: {
            tooltip: 'ตัวเลือกรูปภาพ',
          },
          display: {
            tooltip: 'แสดงผล',
            inline: 'แบบอินไลน์',
            block: 'แบ่งข้อความ',
            left: 'ลอยไปทางซ้าย',
            right: 'ลอยไปทางขวา',
          },
        },
        control: {
          insert_by_url: {
            title: 'เพิ่มรูปภาพ',
            placeholder: 'Url ของภาพ',
            confirm: 'เพิ่ม',
            cancel: 'ยกเลิก',
            invalid_url: 'กรุณาใส่ Url ที่ถูกต้อง',
          },
          upload_image: {
            title: 'อัพโหลดรูปภาพ',
            button: 'เลือกไฟล์ภาพ หรือ ลากวางที่นี่',
          },
          edit_image: {
            title: 'แก้ไขรูปภาพ',
            confirm: 'อัพเดท',
            cancel: 'ยกเลิก',
            form: {
              src: 'Url ภาพ',
              alt: 'ข้อความแสดงแทน',
              width: 'ความกว้าง',
              height: 'ความสูง',
            },
          },
        },
      },
      Iframe: {
        tooltip: 'ใส่วิดีโอ',
        control: {
          title: 'ใส่วิดีโอ',
          placeholder: 'อ้างอิง',
          confirm: 'ใส่',
          cancel: 'ยกเลิก',
        },
      },
      BulletList: {
        tooltip: 'รายการหัวข้อย่อย',
      },
      OrderedList: {
        tooltip: 'รายการสั่งซื้อ',
      },
      TodoList: {
        tooltip: 'รายการสิ่งที่ต้องทำ',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: 'ชิดซ้าย',
          },
          align_center: {
            tooltip: 'กึ่งกลาง',
          },
          align_right: {
            tooltip: 'ชิดขวา',
          },
          align_justify: {
            tooltip: 'ชิดขอบ',
          },
        },
      },
      FontType: {
        tooltip: 'แบบอักษร',
      },
      FontSize: {
        tooltip: 'ขนาดอักษร',
        default: 'ค่าเริ่มต้น',
      },
      TextColor: {
        tooltip: 'สีอักษร',
      },
      TextHighlight: {
        tooltip: 'ไฮไลท์ข้อความ',
      },
      LineHeight: {
        tooltip: 'ความสูงขอเส้น',
      },
      Table: {
        tooltip: 'ตาราง',
        buttons: {
          insert_table: 'เพิ่มตาราง',
          add_column_before: 'เพิ่มคอลัมน์ด้านหน้า',
          add_column_after: 'เพิ่มคอลัมน์ด้านหลัง',
          delete_column: 'ลบคอลัมน์',
          add_row_before: 'เพิ่มแถวด้านบน',
          add_row_after: 'เพิ่มแถวด้านล่าง',
          delete_row: 'ลบแถว',
          merge_cells: 'รวมเซลล์',
          split_cell: 'แบ่งเซลล์',
          delete_table: 'ลบตาราง',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: 'ย่อหน้า',
          },
          outdent: {
            tooltip: 'ล้ำหน้า',
          },
        },
      },
      FormatClear: {
        tooltip: 'ล้างรูปแบบ',
      },
      HorizontalRule: {
        tooltip: 'กฎแนวนอน',
      },
      History: {
        tooltip: {
          undo: 'ยกเลิก',
          redo: 'ทำซ้ำ',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: 'เต็มหน้าจอ',
          exit_fullscreen: 'ออกจากโหมดเต็มหน้าจอ',
        },
      },
      Print: {
        tooltip: 'สั่งพิมพ์',
      },
      Preview: {
        tooltip: 'ตัวอย่างก่อนพิมพ์',
        dialog: {
          title: 'ตัวอย่างก่อนพิมพ์',
        },
      },
      SelectAll: {
        tooltip: 'เลือกทั้งหมด',
      },
      CodeView: {
        tooltip: 'มุมมองโค้ด',
      },
    },
    characters: 'อักขระ',
  },
};
