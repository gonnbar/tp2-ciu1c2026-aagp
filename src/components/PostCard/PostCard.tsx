import comentario from "../../assets/comentario.svg";
import { Link } from "react-router-dom";
import { formatPostDate } from "../../utils/date";
import type { Post } from "../../types/Post";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  console.log(post.images);
  return (
    <div className="mb-6 rounded-xl bg-surface p-5 shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={`https://i.pravatar.cc/80?u=${post.user.nickname}`}
              alt={post.user.nickname}
              className="
                w-11
                h-11
                md:w-12
                md:h-12
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

          <p className="mb-5 text-text text-base md:text-lg leading-relaxed">
            {post.texto}
          </p>

          {post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag._id}
                  className="
                    bg-secondary/20
                    text-primary
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  #{tag.nombre}
                </span>
              ))}
            </div>
          )}

          <div
            className="
              mt-auto
              pt-6
              flex
              items-center
              gap-2
              text-text-secondary
            "
          >
            <img src={comentario} alt="Comentarios" className="w-4 h-4" />

            <span>
              {post.comments.length}{" "}
              {post.comments.length === 1 ? "comentario" : "comentarios"}
            </span>
          </div>
        </div>

        <div
          className="
            flex 
            flex-col
            justify-between
            items-center
            w-full
            md:w-auto
          "
        >
          {post.images.length > 0 ? (
            <div className="relative">
              <img
                src={post.images[0].url}
                alt="Publicación"
                className="
                  w-full
                  max-w-sm
                  h-48
                  object-cover
                  rounded-lg
                "
              />
              {post.images.length > 1 && (
                <span
                  className="
                    absolute
                    top-2
                    right-2
                    bg-black/70
                    text-white
                    px-2.5
                    py-1
                    rounded-md
                    text-xs
                    font-medium
                  "
                >
                  +{post.images.length - 1}
                </span>
              )}
            </div>
          ) : (
            <div className="flex-1" />
          )}

          <Link
            to={`/post/${post._id}`}
            className="
              mt-4
              md:mt-6
              self-end
              rounded-xl
              bg-primary
              px-5
              py-2.5
              text-white
              hover:bg-primary-dark
              transition
              text-center
              w-full
              sm:w-auto
            "
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
