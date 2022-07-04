import { Editor } from '@tiptap/core';
import { computed, ShallowRef } from 'vue';

export default function useCharacterCount(
  editor: ShallowRef<Editor | undefined>
) {
  const characters = computed(() => {
    return editor.value?.storage.characterCount.characters();
  });

  return {
    characters,
  };
}
