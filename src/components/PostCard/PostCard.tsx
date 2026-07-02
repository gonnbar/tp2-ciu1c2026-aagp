import { Link } from "react-router-dom";
import { formatPostDate } from "../../utils/date";
import type { Post } from "../../types/Post";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { getAvatarUrl } from "../../utils/avatar";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const hasImages = post.images.length > 0;

  return (
    <div 
      className="
        mb-6 
        rounded-2xl
        bg-[var(--surface-soft)]
        shadow-[0_12px_40px_rgba(109,66,216,.07)]
        border
        border-[#F2ECFF] 
        p-5 
      "
    >
      <div
        className={
          hasImages ? "flex flex-col md:flex-row gap-6" : "flex flex-col"
        }
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={getAvatarUrl(post.user.nickname)}
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
              <h3 className="text-lg font-semibold text-text">
                {post.user.nickname}
              </h3>

              <p className="text-sm text-text-secondary">
                {formatPostDate(post.fecha)}
              </p>
            </div>
          </div>

          <p className="mb-5 text-text text-base md:text-lg leading-relaxed">
            {post.texto}
          </p>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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
        </div>

        {hasImages && (
          <div className="w-full md:w-80 shrink-0">
            <div className="relative">
              <img
                src={post.images[0].url}
                alt="Publicación"
                className="
                  w-full
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
                    bg-black/60
                    text-white
                    px-3
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
          </div>
        )}
      </div>

      <div
        className="
          mt-6
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div className="flex items-center gap-2 text-text-secondary">
          <HiOutlineChatBubbleOvalLeft className="w-5 h-5 text-primary-dark stroke-2" />

          <span>
            {post.comments.length}{" "}
            {post.comments.length === 1 ? "comentario" : "comentarios"}
          </span>
        </div>

        <Link
          to={`/post/${post._id}`}
          className="
            w-full
            sm:w-auto
            text-center
            rounded-xl
            bg-primary
            px-5
            py-2.5
            text-white
            hover:bg-primary-dark
            transition
          "
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default PostCard;