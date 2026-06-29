import { useEffect, useState } from "react";
import { useAuth } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { getUserPosts } from "../services/profile";
import type { Post } from "../types/Post";

function Profile() {
  const { user, logout } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?._id) return;

    getUserPosts(user._id)
      .then(setPosts)
      .catch(() => setPosts([]));
  }, [user]);

  return (
    <div className="min-h-screen bg-background p-6">

      {/* CONTENEDOR CENTRAL */}
      <div className="max-w-3xl mx-auto bg-surface rounded-2xl shadow-md overflow-hidden">

        {/* HEADER (tipo banner de perfil) */}
        <div className="p-6 border-b border-border flex justify-between items-start">

          <div>
            <h1 className="text-2xl font-bold text-text">
              {user?.nickname}
            </h1>

            <p className="text-sm text-textSecondary mt-1">
              {posts.length} publicaciones
            </p>
          </div>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Cerrar sesión
          </button>

        </div>

        {/* POSTS */}
        <div className="p-6 space-y-4">

          {posts.length === 0 ? (
            <p className="text-textSecondary text-center py-10">
              No hay publicaciones todavía
            </p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className="border border-border rounded-xl p-4 space-y-2 bg-white"
              >
                <p className="text-text">{post.texto}</p>

                <p className="text-xs text-textSecondary">
                  Comentarios visibles: {post.comments?.length ?? 0}
                </p>

                <Link
                  to={`/post/${post._id}`}
                  className="text-sm text-violet-600 hover:underline"
                >
                  Ver más
                </Link>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default Profile;