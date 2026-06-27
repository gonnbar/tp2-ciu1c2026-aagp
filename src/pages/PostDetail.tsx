import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Post } from "../types/Post";
import { getPostById } from "../services/posts";
import Loading from "../components/Loading/Loading";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";

export default function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarPost() {
      try {
        if (!id) return;

        const data = await getPostById(id);

        setPost(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    cargarPost();
  }, [id]);

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
        py-10
        px-4
      "
    >
      <div
        className="
          max-w-4x1
          mx-auto
          bg-surface
          rounded-2x1
          shadow-md
          p-8
        "
      >
        <p
          className="
            text-text-secondary
            text-sm
            mb-2
          "
        >
          Publicado por
        </p>

        <h2
          className="
            text-primary
            text-lg
            font-semibold
            mb-6
          "
        >
          {post?.user.nickname}
        </h2>

        <p
          className="
            text-text-secondary
            text-sm
            mb-6
          "
        >
          {new Date(post.fecha).toLocaleDateString("es-AR")}
        </p>

        <p
          className="
            text-text
            text-xl
            leading-relaxed
            mb-6
          "
        >
          {post?.texto}
        </p>

        {post?.tags.length > 0 && (
          <div
            className="
              flex
              flex-wrap
              gap-2
              mb-8
            "
          >
            {post?.tags.map((tag) => (
              <span
                key={tag._id}
                className="
                  bg-secondary
                  text-white
                  px-4
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

        <ImageGallery images={post?.images || []} />

        <div className="mt-10">
          <CommentList comments={post?.comments || []} />
        </div>

        <div
          className="
            mt-8
            border-t
            border-border
            pt-6
          "
        >
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
