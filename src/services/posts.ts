import { API_URL } from "./config";

export type CreatePostData = {
  texto: string;
  user: string;
  tags: string[];
};

export type CreatePostImageData = {
  url: string;
  postId: string;
};

export async function getPostById(id: string) {
  const response = await fetch(`${API_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el post.");
  }

  const data = await response.json();

  return data.post;
}

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);

  if (!response.ok) {
    throw new Error("Error al obtener los posts.");
  }

  const data = await response.json();

  return data.posts;
}

export async function createPost(post: CreatePostData) {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error("Error al crear el post.");
  }

  return response.json();
}

export async function createPostImage(postImage: CreatePostImageData) {
  const response = await fetch(`${API_URL}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postImage),
  });

  if (!response.ok) {
    throw new Error("Error al crear el post image.");
  }

  return response.json();
}
