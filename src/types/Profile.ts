import type { Post } from "./Post";

export type Profile = {
    nickname: string;
    posts: Post[];
    bio: string;
    commentsCount: number;
}