import fs from 'node:fs'

export function readFirstExistingFrame(paths: string[]): string | null {
  const match = paths.find((file) => fs.existsSync(file))
  if (!match) {
    return null
  }
  return fs.readFileSync(match, 'utf-8')
}
