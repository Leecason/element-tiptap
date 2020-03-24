import { Transaction } from 'prosemirror-state';
import { NodeType } from 'prosemirror-model';
import { isNodeSelection } from 'prosemirror-utils';

type ImageResult = {
  complete: boolean;
  width: number;
  height: number;
  src: string;
};

interface ImageCache {
  [key: string]: ImageResult;
}

const IMAGE_CACHE: ImageCache = {};

export function resolveImg (src: string): Promise<ImageResult> {
  return new Promise((resolve, reject) => {
    const result: ImageResult = {
      complete: false,
      width: 0,
      height: 0,
      src,
    };

    if (!src) {
      reject(result);
      return;
    }

    if (IMAGE_CACHE[src]) {
      resolve({ ...IMAGE_CACHE[src] });
      return;
    }

    const img = new Image();

    img.onload = () => {
      result.width = img.width;
      result.height = img.height;
      result.complete = true;

      IMAGE_CACHE[src] = { ...result };
      resolve(result);
    };

    img.onerror = () => {
      reject(result);
    };

    img.src = src;
  });
}

export function updateImageAttrs (tr: Transaction, image: NodeType, attrs: Object): Transaction {
  const { selection } = tr;
  if (!selection) return tr;

  if (!isNodeSelection(selection)) return tr;

  // @ts-ignore
  const { from, node } = selection;
  tr = tr.setNodeMarkup(from, image, attrs, node.marks);
  return tr;
}
