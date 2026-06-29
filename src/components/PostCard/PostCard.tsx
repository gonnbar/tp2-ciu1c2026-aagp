import comentario from "../../assets/comentario.svg";
import { Link } from "react-router-dom";
import { formatPostDate } from "../../utils/date";
import type { Post } from "../../types/Post";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <div className="mb-6 rounded-xl bg-surface p-5 shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={`https://i.pravatar.cc/80?u=${post.user.nickname}`}
              alt={post.user.nickname}
              className="
                w-12
                h-12
                rounded-full
                object-cover
                border-2
                border-secondary/20
              "
            />

            <div>
              <h3
                className="
                  text-lg
                  font-semibold
                  text-text
                "
              >
                {post.user.nickname}
              </h3>

              <p
                className="
                  text-sm
                  text-text-secondary
                "
              >
                {formatPostDate(post.fecha)}
              </p>
            </div>
          </div>
          <p className="mb-4 text-text">{post.texto}</p>
          {post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag._id}
                  className="
                    rounded-full
                    bg-primary/10
                    px-3
                    py-1
                    text-sm
                    text-secondary
                  "
                >
                  #{tag.nombre}
                </span>
              ))}
            </div>
          )}
          <Link
            to={`/post/${post._id}`}
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition"
          >
            <img src={comentario} alt="Comentarios" className="w-4 h-4" />
            <span>
              {post.comments.length}{" "}
              {post.comments.length === 1 ? "comentario" : "comentarios"}
            </span>
          </Link>
        </div>
        {post.images.length > 0 && (
          <div className="flex flex-col items-center">
            <img
              src={post.images[0].url}
              alt="Publicación"
              className="
                w-80
                rounded-lg
                object-cover
              "
            />

            <Link
              to={`/post/${post._id}`}
              className="
                mt-4
                rounded-lg
                bg-primary
                px-4
                py-2
                text-white
                hover:opacity-90
                text-center
              "
            >
              Ver más
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostCard;