import path from "path";

export default function filenameReservedRegex() {
  return /[<>:"/\\|?*\u0000-\u001F]/g;
}

export function windowsReservedNameRegex() {
  return /^(con|prn|aux|nul|com\d|lpt\d)$/i;
}

export function isValidFilename(string: string): boolean {
  if (!string || string.length > 255) return false;
  if (filenameReservedRegex().test(string) || windowsReservedNameRegex().test(string)) return false;
  if (string === '.' || string === '..') return false;
  return true;
}

export function isValidPath(string: string): boolean {
  const parse = path.parse(string);
  if (!isValidFilename(parse.name)) return false;
  return true;
}