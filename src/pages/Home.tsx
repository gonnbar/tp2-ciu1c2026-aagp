import bannerCompu from "../assets/bannerDesktop.png";
import bannerCel from '../assets/bannerCel.png';
import SideBar from "../components/SideBar/SideBar";
import PanelDerecho from "../components/PanelDerecho/PanelDerecho";
import PostCard from "../components/PostCard/PostCard";
import { useEffect, useState } from "react";

type Post = {
  _id: string;
  texto: string;
  user: {
    _id: string;
    nickname: string;
  };
  fecha: string;
  tags: {
    _id: string;
    nombre: string;
  }[];
  comments: {
    _id: string;
    content: string;
    userId: {
      _id: string;
      nickname: string;
    };
  }[];
  images: {
    _id: string;
    url: string;
  }[];
};
function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts)
        setPosts(data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
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

        <div className="flex flex-col lg:flex-row items-start gap-6 p-6">
          <div className="w-full lg:w-60 flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
            <SideBar />
          </div>
        <main className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-text mb-4">
              Publicaciones recientes
            </h2>

            {posts.map((post) => (
              <PostCard
                key={post._id}
                id={post._id}
                usuario={post.user.nickname}
                fecha={post.fecha}
                contenido={post.texto}
                imagen={post.images[0]?.url || ""}
                tags={post.tags}
                comments={post.comments}
              />
            ))}
          </main>
          <PanelDerecho />
        </div>
      </div>
    </div>
  );
}
export default Home;