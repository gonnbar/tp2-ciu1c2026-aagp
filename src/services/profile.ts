import { API_URL } from "./config";
import type { Post } from "../types/Post";

export async function getUserPosts(id: string) {
  const response = await fetch(`${API_URL}/users/${id}/posts`);

  if (!response.ok) {
    throw new Error("Error al obtener posts.");
  }

  const userPosts: Post[] = await response.json();

  return userPosts;
  
}