import type { Image } from "./Image";
import type { Tag } from "./Tag";

export type CreatePost = {
  description: string;
  tags: Tag[];
  images: Image[];
};