interface ProbeStackFrame {
  file?: string
  line?: number
}

export function firstUsefulStackFrame(frames: ProbeStackFrame[]): string {
  const frame = frames.find((item) => item.file?.endsWith('.ts'))
  return `${frame.file}:${frame.line}`
}
