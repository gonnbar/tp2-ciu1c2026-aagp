import { API_URL } from "./config";

export async function createComment(comment: {
  content: string;
  userId: string;
  postId: string;
}) {
  const response = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  return response.json();
}
