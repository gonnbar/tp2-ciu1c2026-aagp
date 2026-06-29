import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Post } from "../types/Post";
import type { Comment } from "../types/Comment";
import { getPostById } from "../services/posts";
import { formatPostDate } from "../utils/date";
import Loading from "../components/Loading/Loading";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";
import { useAuth } from "../context/UserContext";

export default function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  const [post, setPost] = useState<Post | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarPost() {
      try {
        if (!id) {
          setLoading(false);
          return;
        }

        const data = await getPostById(id);

        setPost(data);
      } catch (error) {
        console.error("Error inesperado: ", error);
      } finally {
        setLoading(false);
      }
    }

    cargarPost();
  }, [id]);

  function handleCommentCreated(comment: Comment) {
    if(!post) return;

    setPost({
      ...post,
      comments: [...post.comments, comment]
    });
  }

  if (loading) {
    return <Loading />;
  }

  if (!post) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-text-secondary
        "
      >
        No se encontró el post.
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-background
        py-6 
        md:py-10
        px-4
      "
    >
      <div
        className="
          max-w-2xl
          mx-auto
          bg-white
          rounded-3xl
          shadow-md
          p-5 
          md:p-8
          mb-10
        "
      >
        <button
          onClick={() => navigate(-1)}
          className="
          flex
          items-center
          gap-2
          text-primary
          font-medium
          mb-6
          hover:text-primary-dark
          transition
          cursor-pointer
        "
        >
          ← Volver
        </button>

        <div className="flex items-center gap-3 mb-5">
          <img
            src={`https://i.pravatar.cc/80?u=${post.user.nickname}`}
            alt={post.user.nickname}
            className="
              w-12 
              h-12 
              md:w-14 
              md:h-14
              rounded-full
              object-cover
              border-2
              border-secondary/30
            "
          />

          <div>
            <h3 className="font-semibold">{post.user.nickname}</h3>

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

        <p
          className="
            text-base 
            md:text-lg
            text-text
            leading-relaxed
            mb-6
          "
        >
          {post.texto}
        </p>

        {post?.tags.length > 0 && (
          <div
            className="
              flex
              flex-wrap
              gap-2
              mb-6
            "
          >
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

        <ImageGallery images={post.images || []} />

        <div className="mt-12">
          <h2
            className="
              text-xl 
              md:text-2xl
              font-bold
              mb-6
            "
          >
            Comentarios ({post.comments.length || 0})
          </h2>

          <CommentList comments={post.comments || []} />
        </div>

        <div
          className="
            mt-8
            bg-gray-50
            border
            border-border
            rounded-2xl
            overflow-hidden
            p-3 md:p-4
          "
        >
          {user && (
            <CommentForm
              userId={user._id} 
              postId={post._id}
              onCommentCreated={handleCommentCreated}
            />
          )}
        </div>
      </div>
    </div>
  );
}
