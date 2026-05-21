export function waLink(message: string): string {
  return `https://wa.me/60123260160?text=${encodeURIComponent(message)}`
}
