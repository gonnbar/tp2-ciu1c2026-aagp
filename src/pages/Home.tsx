import banner from "../assets/bannerHome.png";
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
        setPosts(data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <div className="relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"/>
      <div className="flex flex-col lg:flex-row items-start gap-6 p-6">
        <SideBar />
        <main className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-text mb-4">
            Publicaciones recientes
          </h2>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              usuario={post.user.nickname}
              fecha={post.fecha}
              contenido={post.texto}
              imagen={post.images[0]?.url || ""}
              tags={post.tags}
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