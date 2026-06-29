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
      <div className="relative">
        <picture>
          <source media="(max-width: 700px)" srcSet={bannerCel} />
          <img
            src={bannerCompu}
            alt="Banner"
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />
        </picture>

        <div className="max-w-7x1 mx-auto flex flex-col lg:flex-row gap-6 p-4 md:p-6">
          <div className="w-full lg:w-60 flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
            <SideBar />
          </div>
          <main className="w-full flex-1 min-w-0">
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
                <span className="text-5xl mb-4">👻</span>//cambiar por svg
                <p>No hay publicaciones todavía.</p>
              </div>
            ) : (
              posts.map((post) => <PostCard key={post._id} post={post} />)
            )}
          </main>
          <PanelDerecho />
        </div>
      </div>
    </div>
  );
}

export default Home;