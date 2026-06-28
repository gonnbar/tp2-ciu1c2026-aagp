import { useEffect, useState } from "react";
//import { useParams, useNavigate } from "react-router";
import type { Post } from "../types/Post";
import { getPostById } from "../services/posts";
import Loading from "../components/Loading/Loading";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";

export default function PostDetail() {
  //const navigate = useNavigate();
  //const { id } = useParams();

  const id = "6a41a4f0889b1a2b74572724";

  const [post, setPost] = useState<Post | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarPost() {
      try {
        if (!id) return;

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
      <button
        //onClick={() => navigate(-1)}
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

      <div
        className="
          max-w-2xl
          mx-auto
          bg-white
          rounded-3xl
          shadow-md
          p-8
          mb-10
        "
      >
        <div className="flex items-center gap-3 mb-5">
          <img
            src="https://i.pravatar.cc/80"
            alt="avatar"
            className="
              w-12
              h-12
              rounded-full
              object-cover
            "
          />

          <div>
            <h3 className="font-semibold">{post?.user.nickname}</h3>

            <p
              className="
                text-sm
                text-text-secondary
              "
            >
              {new Date(post.fecha).toLocaleDateString("es-AR")}
            </p>
          </div>
        </div>

        <h1
          className="
            text-3xl
            font-bold
            leading-snug
            mb-5
          "
        >
          {post?.texto}
        </h1>

        {post?.tags.length > 0 && (
          <div
            className="
              flex
              flex-wrap
              gap-2
              mb-6
            "
          >
            {post?.tags.map((tag) => (
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

        <ImageGallery images={post?.images || []} />

        <div className="mt-10">
          <h2
            className="
              text-2xl
              font-bold
              mb-6
            "
          >
            Comentarios ({post?.comments?.length || 0})
          </h2>

          <CommentList comments={post?.comments || []} />
        </div>

        <div
          className="
            mt-8
            bg-gray-50
            border
            border-border
            rounded-2xl
            overflow-hidden
            p-4
          "
        >
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
