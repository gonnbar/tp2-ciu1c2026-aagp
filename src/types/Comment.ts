import type { User } from "./User";

export type Comment = {
  _id: string;
  content: string;
  userId: User;
  createdAt: string; 
};
