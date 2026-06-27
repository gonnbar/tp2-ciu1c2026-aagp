import type { Comment } from "../../types/Comment";

type Props = {
  comments: Comment[];
};

export default function CommentList({ comments }: Props) {
  if (comments.length === 0) {
    return (
      <div
        className="
          mt-8
          text-text-secondary
        "
      >
        Todavía no hay comentarios.
      </div>
    );
  }

  return (
    <div className="mt-8">
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="
            flex
            gap-3
            mb-6
          "
        >
          <img
            src={`https://i.pravatar.cc/50?u=${comment.userId._id}`}
            alt="avatar"
            className="
              w-10
              h-10
              rounded-full
              object-cover
              flex-shrink-0
            "
          />

          <div className="flex-1">
            <h4
              className="font-semibold"
            >
              {comment.userId.nickname}
            </h4>

            <p
              className="text-text mt-1"
            >
              {comment.content}
            </p>

          </div>

        </div>

      ))}
      
    </div>
  );
}
