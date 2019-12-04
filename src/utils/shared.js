export function noop () {}

export function clamp (val, min, max) {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}

export function readFileDataUrl (file) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = readerEvent => resolve(readerEvent.target.result);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}
