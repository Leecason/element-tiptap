export default {
  editor: {
    extensions: {
      Bold: {
        tooltip: '굵게',
      },
      Underline: {
        tooltip: '밑줄',
      },
      Italic: {
        tooltip: '기울임',
      },
      Strike: {
        tooltip: '취소선',
      },
      Heading: {
        tooltip: '문단 형식',
        buttons: {
          paragraph: '문단',
          heading: '제목',
        },
      },
      Blockquote: {
        tooltip: '인용',
      },
      CodeBlock: {
        tooltip: '코드',
      },
      Link: {
        add: {
          tooltip: '링크 추가',
          control: {
            title: '링크 추가',
            href: 'URL주소',
            open_in_new_tab: '새 탭에서 열기',
            confirm: '적용',
            cancel: '취소',
          },
        },
        edit: {
          tooltip: '링크 편집',
          control: {
            title: '링크 편집',
            href: 'URL주소',
            open_in_new_tab: '새 탭에서 열기',
            confirm: '적용',
            cancel: '취소',
          },
        },
        unlink: {
          tooltip: '링크 제거',
        },
        open: {
          tooltip: '링크 열기',
        },
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: '이미지 추가',
            external: '이미지 URL을 입력하세요.',
            upload: '이미지 업로드',
          },
          remove_image: {
            tooltip: '제거',
          },
          image_options: {
            tooltip: '이미지 옵션',
          },
          display: {
            tooltip: '표시',
            inline: '인라인',
            block: '새줄',
            left: '좌측 정렬',
            right: '우측 정렬',
          },
        },
        control: {
          insert_by_url: {
            title: '이미지 추가',
            placeholder: '이미지 URL',
            confirm: '추가',
            cancel: '취소',
            invalid_url: '정확한 URL을 입력하세요',
          },
          upload_image: {
            title: '이미지 업로드',
            button: '이미지 파일을 선택하거나 끌어넣기 하세요',
          },
          edit_image: {
            title: '이미지 편집',
            confirm: '적용',
            cancel: '취소',
            form: {
              src: '이미지 URL',
              alt: '대체 텍스트',
              width: '너비',
              height: '높이',
            },
          },
        },
      },
      Iframe: {
        tooltip: '비디오 추가',
        control: {
          title: '비디오 추가',
          placeholder: '비디오 URL',
          confirm: '추가',
          cancel: '취소',
        },
      },
      BulletList: {
        tooltip: '비번호 목록',
      },
      OrderedList: {
        tooltip: '번호 목록',
      },
      TodoList: {
        tooltip: '할일 목록',
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: '좌측 정렬',
          },
          align_center: {
            tooltip: '중앙 정렬',
          },
          align_right: {
            tooltip: '우측 정렬',
          },
          align_justify: {
            tooltip: '좌우 정렬',
          },
        },
      },
      FontType: {
        tooltip: '폰트',
      },
      FontSize: {
        tooltip: '글자 크기',
        default: '기본',
      },
      TextColor: {
        tooltip: '글자 색',
      },
      TextHighlight: {
        tooltip: '글자 강조',
      },
      LineHeight: {
        tooltip: '줄 높이',
      },
      Table: {
        tooltip: '테이블',
        buttons: {
          insert_table: '테이블 추가',
          add_column_before: '이전에 열 추가',
          add_column_after: '이후에 열 추가',
          delete_column: '열 삭제',
          add_row_before: '이전에 줄 추가',
          add_row_after: '이후에 줄 추가',
          delete_row: '줄 삭제',
          merge_cells: '셀 병합',
          split_cell: '셀 분할',
          delete_table: '테이블 삭제',
        },
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: '들여 쓰기',
          },
          outdent: {
            tooltip: '내어 쓰기',
          },
        },
      },
      FormatClear: {
        tooltip: '형식 지우기',
      },
      HorizontalRule: {
        tooltip: '가로 줄',
      },
      History: {
        tooltip: {
          undo: '되돌리기',
          redo: '다시 실행',
        },
      },
      Fullscreen: {
        tooltip: {
          fullscreen: '전체화면',
          exit_fullscreen: '전체화면 나가기',
        },
      },
      Print: {
        tooltip: '인쇄',
      },
      Preview: {
        tooltip: '미리보기',
        dialog: {
          title: '미리보기',
        },
      },
      SelectAll: {
        tooltip: '전체선택',
      },
      CodeView: {
        tooltip: '코드 뷰',
      },
    },
    characters: '문자수',
  },
};
