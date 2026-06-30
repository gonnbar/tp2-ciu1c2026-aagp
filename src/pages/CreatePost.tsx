import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import { createPost, createPostImage, getTags } from "../services/createPost";
import type { Tag } from "../types/Tag";
import SideBar from "../components/SideBar/SideBar";
// import Toast from "../components/Toast/Toast";
import PanelDerecho from "../components/PanelDerecho/PanelDerecho";

function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  // const [message, setMessage] = useState("");

  const [texto, setTexto] = useState("");
  const [images, setImages] = useState<string[]>([""]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [errorTexto, setErrorTexto] = useState("");
  const [publicado, setPublicado] = useState(false);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tags = await getTags();
        setAllTags(tags);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTags();
  }, []);

  const handleImageChange = (index: number, value: string) => {
    const nuevas = [...images];
    nuevas[index] = value;
    setImages(nuevas);
  };

  const addImageField = () => {
    if (images.length >= 4) return;
    setImages([...images, ""]);
  };

  const actualizarSelectedTags = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user?._id) return;
    if (texto.trim() === "") {
      setErrorTexto("La descripción es obligatoria.");
      return;
    }
    setErrorTexto("");

    try {
      const post = await createPost({
        texto,
        user: user._id,
        tags: selectedTags,
      });
      const validImages = images.filter((img) => img.trim() !== "");
      for (const url of validImages) {
        await createPostImage({
          url,
          postId: post._id,
        });
      }
      setPublicado(true);
    } catch (error) {
      console.error(error);
      alert("No se pudo publicar el post.");
    }
  };

  if (publicado) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="bg-surface rounded-2xl shadow-md p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-success mb-4">
            Se ha publicado el post.
          </h2>
          <p className="text-textSecondary mb-6">
            Tu post se publicó correctamente.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/profile")}
              className="w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-lg transition"
            >
              Ir a Perfil
            </button>
            <button
              onClick={() => {
                setPublicado(false);
                setTexto("");
                setImages([""]);
                setSelectedTags([]);
                setErrorTexto("");
              }}
              className="w-full border border-border rounded-lg py-3 hover:bg-background transition"
            >
              Nuevo post
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen ">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-6 self-start">
            <SideBar />
          </aside>
          <main className="flex-1 min-w-0 w-full">
            <div
              className="
                bg-white
                rounded-3xl
                shadow-md
                p-5
                md:p-8
                w-full
              "
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-2xl font-bold text-text">
                  Crear nuevo post
                </h1>

                <div>
                  <label className="block mb-2 font-semibold">
                    Descripción
                  </label>

                  <textarea
                    value={texto}
                    onChange={(e) => {
                      setTexto(e.target.value);
                      setErrorTexto("");
                    }}
                    placeholder="¿Qué estás pensando?..."
                    className="
                      w-full
                      border
                      border-border
                      rounded-xl
                      p-3
                    "
                    rows={4}
                  />

                  {errorTexto && (
                    <p className="mt-2 text-sm text-red-600">{errorTexto}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Imágenes</label>

                  <div className="space-y-2">
                    {images.map((image, index) => (
                      <input
                        key={index}
                        type="text"
                        value={image}
                        onChange={(e) =>
                          handleImageChange(index, e.target.value)
                        }
                        placeholder="https://..."
                        className="
                          w-full
                          border
                          border-border
                          rounded-xl
                          p-3
                        "
                      />
                    ))}
                  </div>

                  {images.length < 4 && (
                    <button
                      type="button"
                      onClick={addImageField}
                      className="
                        mt-3
                        text-primary
                        hover:text-primary-dark
                        cursor-pointer
                      "
                    >
                      + Agregar imagen
                    </button>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Tags</label>

                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag._id}
                        type="button"
                        onClick={() => actualizarSelectedTags(tag._id)}
                        className={`px-3 py-2 rounded-xl border transition ${
                          selectedTags.includes(tag._id)
                            ? "bg-primary text-white border-primary"
                            : "bg-white border-border hover:bg-background"
                        }`}
                      >
                        {tag.nombre}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    bg-primary
                    hover:bg-primary-dark
                    text-white
                    py-3
                    rounded-xl
                    transition
                    cursor-pointer
                  "
                >
                  Publicar
                </button>
              </form>
            </div>
          </main>
          <aside className="w-full lg:w-64 shrink-0">
            <PanelDerecho />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
