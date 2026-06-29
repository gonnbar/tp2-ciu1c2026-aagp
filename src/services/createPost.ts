import { API_URL } from "./config";
import type { Tag } from "../types/Tag"

export async function createPost(post: {
  texto: string;
  user: string;
  tags: string[];
}) {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
}

export async function createPostImage(postImage: {
  url: string;
  postId: string;
}) {
  const response = await fetch(`${API_URL}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postImage),
  });

  return response.json();
}

export async function getTags() {
  const response = await fetch(`${API_URL}/tags`);

  if (!response.ok) {
    throw new Error("Error al obtener los tags.");
  }

  const tags: Tag[] = await response.json();

  return tags;
}