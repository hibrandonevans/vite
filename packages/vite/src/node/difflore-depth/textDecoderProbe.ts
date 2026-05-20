const decoder = new TextDecoder()

export function decodeProbe(bytes: Uint8Array): string {
  return decoder.decode(bytes)
}
