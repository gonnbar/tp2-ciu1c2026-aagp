import bannerCompu from "../assets/bannerDesktop.png";
import bannerCel from "../assets/bannerCel.png";
import SideBar from "../components/SideBar/SideBar";
import PanelDerecho from "../components/PanelDerecho/PanelDerecho";
import PostCard from "../components/PostCard/PostCard";
import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import { getPosts } from "../services/posts";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    cargarPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-6 self-start">
            <SideBar />
          </aside>
          <div className="flex-1 min-w-0">
            <picture>
              <source media="(max-width: 700px)" srcSet={bannerCel} />
              <img
                src={bannerCompu}
                alt="Banner"
                className="w-full h-auto rounded-2xl"
              />
            </picture>
            <div className="flex flex-col xl:flex-row gap-6 mt-6 items-start">
              <main className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-bold text-text mb-6">
                  Publicaciones recientes
                </h2>

                {posts.length === 0 ? (
                  <div
                    className="
                    flex
                    flex-col
                    items-center
                    py-20
                    text-text-secondary
                  "
                  >
                    <p>No hay publicaciones todavía.</p>
                  </div>
                ) : (
                  posts.map((post) => <PostCard key={post._id} post={post} />)
                )}
              </main>

              <aside className="w-full xl:w-72 shrink-0">
                <PanelDerecho />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
