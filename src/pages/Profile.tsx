import { useEffect, useState } from "react";
import { useAuth } from "../context/UserContext";
import { Link, useLocation } from "react-router-dom";
import { getUserPosts } from "../services/profile";
import type { Post } from "../types/Post";
import SideBar from "../components/SideBar/SideBar";
import PanelDerecho from "../components/PanelDerecho/PanelDerecho";
import PostCard from "../components/PostCard/PostCard";

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
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div
            className="
              w-full
              lg:w-64
              shrink-0
              lg:sticky
              lg:top-6
              self-start
            "
          >
            <SideBar />
          </div>
          <div>
            <div
              className="
                  flex
                  flex-wrap
                  justify-between
                  items-start
                  gap-6
                  pb-6
                  border-b
                  border-border
                "
            >
              <div>
                <h1 className="text-2xl font-bold text-text">
                  {user?.nickname}
                </h1>

                <p className="text-sm text-text-secondary mt-1">
                  {posts.length} publicaciones
                </p>
              </div>

              <Link
                to="/create-post"
                state={{ backgroundLocation: location }}
                className="
                    inline-flex
                    items-center
                    justify-center
                    bg-primary
                    hover:bg-primary-dark
                    text-white
                    font-medium
                    px-5
                    py-3
                    rounded-xl
                    transition
                    w-full
                    sm:w-auto
                  "
              >
                + Nuevo post
              </Link>
            </div>
            <div className="pt-6 space-y-4">
              {posts.length === 0 ? (
                <div
                  className="
                      py-12
                      text-center
                      text-text-secondary
                    "
                >
                  <p>Aún no hay publicaciones.</p>
                </div>
              ) : (
                [...posts].reverse().map((post) => (
                  <PostCard key={post._id} post={post} />
                )))
              }
            </div>
          </div>
        </div>

        <div
          className="
              w-full
              lg:w-64
              shrink-0
            "
        >
          <PanelDerecho />
        </div>
      </div>
    </div>
  );
}

export default Profile;
