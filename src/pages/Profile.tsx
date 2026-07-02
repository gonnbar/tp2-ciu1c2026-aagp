import { useEffect, useState } from "react";
import { useAuth } from "../context/UserContext";
import { getUserPosts } from "../services/profile";
import type { Post } from "../types/Post";
import SideBar from "../components/SideBar/SideBar";
import PanelDerecho from "../components/PanelDerecho/PanelDerecho";
import PostCard from "../components/PostCard/PostCard";
import bannerPerfil from "../assets/banner_profile.png";
import { getAvatarUrl } from "../utils/avatar";

function Profile() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!user?._id) return;
    getUserPosts(user._id)
      .then(setPosts)
      .catch(() => setPosts([]));
  }, [user]);

  return (
    <div className="min-h-screen">
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

          <div className="flex-1 min-w-0">
            <div 
               className="
                bg-[var(--surface-soft)]
                backdrop-blur-md
                border
                border-[#F2ECFF]
                rounded-2xl
                shadow-[0_12px_40px_rgba(109,66,216,.07)]
                overflow-hidden
              "
            >
              <img
                src={bannerPerfil}
                alt="Banner perfil"
                className="w-full h-40 md:h-52 object-cover"
              />

              <div className="relative px-8 pb-8">
                <img
                  src={getAvatarUrl(user!.nickname)}
                  alt={user?.nickname}
                  className="
                    absolute
                    -top-14
                    w-28
                    h-28
                    rounded-full
                    border-4
                    border-[#F2ECFF]
                    object-cover
                    shadow-md
                  "
                />

                <div className="pt-20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div>
                      <h1 className="text-3xl font-bold text-text">
                        {user?.nickname}
                      </h1>

                      <p className="text-text-secondary">@{user?.nickname}</p>

                      <div className="mt-5 flex items-center gap-3">
                        <span
                          className="
                            bg-secondary
                            text-white
                            px-3
                            py-1
                            rounded-2xl
                            text-sm
                          "
                        >
                          {posts.length}
                        </span>

                        <span className="font-medium text-text">
                          Publicaciones realizadas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <div className="border-t border-[#F2ECFF] pt-8 space-y-4">
                  {posts.length === 0 ? (
                    <div className="py-12 text-center text-text-secondary">
                      <p>Aún no hay publicaciones.</p>
                    </div>
                  ) : (
                    [...posts]
                      .reverse()
                      .map((post) => <PostCard key={post._id} post={post} />)
                  )}
                </div>
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
    </div>
  );
}

export default Profile;
