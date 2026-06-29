import type { Comment } from "./Comment";
import type { Image } from "./Image";
import type { User } from "./User";
import type { Tag } from "./Tag";

export type Post = {
  _id: string;
  texto: string;
  user: User;
  tags: Tag[];
  fecha: string;
  images: Image[];
  comments: Comment[];
};
