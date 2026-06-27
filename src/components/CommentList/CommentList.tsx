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
      <h2
        className="
            text-xl
            font-semibold
            mb-4
        "
      >
        Comentarios
      </h2>

      {comments.map((comment) => (
        <div key={comment._id} className="border-b py-4">
          <p className="font-semibold">{comment.userId.nickname}</p>

          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
