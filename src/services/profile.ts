import { API_URL } from "./config";

export async function getUserPosts(id: string) {
  const response = await fetch(`${API_URL}/users/${id}/posts`);

  if (!response.ok) {
    throw new Error("Error al obtener posts.");
  }

  const data = await response.json();

  return data.posts;
}