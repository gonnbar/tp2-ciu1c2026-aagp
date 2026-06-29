import { API_URL } from "./config";

export async function getPostById(id: string) {
  const response = await fetch(`${API_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el post.");
  }

  const data = await response.json();

  return data.post;
}
