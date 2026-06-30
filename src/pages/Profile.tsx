import { useEffect, useState } from "react";
import { useAuth } from "../context/UserContext";
import { Link, useLocation } from "react-router-dom";
import { getUserPosts } from "../services/profile";
import type { Post } from "../types/Post";
function Profile() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const location = useLocation();

  useEffect(() => {
    if (!user?._id) return;
    getUserPosts(user._id)
      .then(setPosts)
      .catch(() => setPosts([]));
  }, [user]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto bg-surface rounded-2xl shadow-md overflow-hidden">

        <div className="p-6 border-b border-border flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-text">
              {user?.nickname}
            </h1>
            <p className="text-sm text-textSecondary mt-1">
              {posts.length} publicaciones
            </p>
          </div>
          <div>
            <Link
              to="/create-post"
              state={{ backgroundLocation: location }}
              className="        
                inline-flex
                items-center
                justify-center
                bg-primary
                hover:bg-primaryDark
                text-white
                font-medium
                px-5
                py-3
                rounded-xl
                transition
              "
            >
              + Nueva publicación
            </Link>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {posts.length === 0 ? (
            <p className="text-textSecondary text-center py-10">
              Aún no hay publicaciones
            </p>
          )
            : (
              [...posts].reverse().map((post) => (
                <div
                  key={post._id}
                  className="border border-border rounded-xl p-4 space-y-2 bg-white"
                >
                  <p className="text-text">{post.texto}</p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag._id}
                          className="
                            bg-secondary/20
                            text-primary
                            px-2
                            py-1
                            rounded-full
                            text-xs
                          "
                        >
                          #{tag.nombre}
                        </span>
                      ))}
                    </div>
                  )
                  }
                  <p className="text-xs text-textSecondary">
                    Comentarios: {post.comments?.length ?? 0}
                  </p>
                  <Link to={`/post/${post._id}`} className="text-sm text-violet-600 hover:underline">
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