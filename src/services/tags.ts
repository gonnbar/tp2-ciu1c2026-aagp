import { API_URL } from "./config";
import type { Tag } from "../types/Tag"

export async function getTags() {
  const response = await fetch(`${API_URL}/tags`);

  if (!response.ok) {
    throw new Error("Error al obtener los tags.");
  }

  const tags: Tag[] = await response.json();

  return tags;
}