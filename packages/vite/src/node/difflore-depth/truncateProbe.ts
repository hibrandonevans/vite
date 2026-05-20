export function truncateHmrFilesProbe(files: string[]): string {
  if (files.length <= 10) {
    return files.join(', ')
  }
  return `${files.slice(0, 9).join(', ')} and ${files.length - 10} more`
}
