import path from "path";

export function isInvalidPath(filePath: string, options: any = {}): boolean {
  const MAX_PATH = options.extended ? 32767 : 260;
  const isWindows = (opts: any = {}) => process.platform === 'win32' || opts.windows === true;
  if (!isWindows(options)) return true;
  if (filePath === '' || typeof filePath !== 'string') return true;
  if (filePath.length > (MAX_PATH - 12)) return true;
  const rootPath = path.parse(filePath).root;
  if (rootPath) filePath = filePath.slice(rootPath.length);
  if (options.file) return /[<>:"/\\|?*]/.test(filePath);
  return /[<>:"|?*]/.test(filePath);
}

export function isValidPath(filePath: string, options: any = {}): boolean {
  return !isInvalidPath(filePath, options);
}