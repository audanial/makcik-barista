export function waLink(message: string): string {
  return `https://wa.me/60128690160?text=${encodeURIComponent(message)}`
}
