export function noop(): void {}

/**
 * Check whether a value is NaN
 */
export function isNaN(val: any) {
  return Number.isNaN(val);
}

export function clamp(val: number, min: number, max: number): number {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}

export function readFileDataUrl(file: File): Promise<any> {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    // @ts-ignore
    reader.onload = readerEvent => resolve(readerEvent.target.result);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

/**
 * Create a cached version of a pure function.
 */
export function cached(fn: Function): Function {
  const cache = Object.create(null);

  return function cachedFn(str: string): string {
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

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
