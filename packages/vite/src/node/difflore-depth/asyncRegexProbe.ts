const importRE = /from\s+['"]([^'"]+)['"]/g

export async function collectImportsProbe(source: string): Promise<string[]> {
  const imports: string[] = []
  importRE.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = importRE.exec(source))) {
    await Promise.resolve()
    imports.push(match[1])
  }
  return imports
}
