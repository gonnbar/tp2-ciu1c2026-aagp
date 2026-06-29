import { API_URL } from "./config";
import type { Comment } from "../types/Comment";

type CreateCommentData = {
  content: string,
  userId: string,
  postId: string
}

export async function createComment(data: CreateCommentData): Promise<Comment> {

  const response = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "No se pudo crear el comentario.");
  }

  return result;
}
