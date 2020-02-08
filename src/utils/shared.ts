export function noop (): void {}

export function clamp (val: number, min: number, max: number): number {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}

export function readFileDataUrl (file: File): Promise<any> {
  const reader:FileReader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = readerEvent => resolve(
      readerEvent.target ? readerEvent.target.result : ''
    );
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

/**
 * Create a cached version of a pure function.
 */
export function cached (fn: Function): Function {
  const cache = Object.create(null);

  return function cachedFn (str: string): string {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Capitalize a string.
 */
export const capitalize = cached((str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
