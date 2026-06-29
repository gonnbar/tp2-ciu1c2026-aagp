export function formatPostDate(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);

  const diff = now.getTime() - date.getTime();

  const minutes = Math.floor(diff / 60000);

  const hours = Math.floor(minutes / 60);

  const days = Math.floor(hours / 24);

  if (minutes < 1) {
    return "ahora";
  }

  if (minutes < 60) {
    return `hace ${minutes} min`;
  }

  if (hours < 24) {
    return `hace ${hours} h`;
  }

  if (days < 7) {
    return `hace ${days} días`;
  }

  return date.toLocaleDateString("es-AR");
}
