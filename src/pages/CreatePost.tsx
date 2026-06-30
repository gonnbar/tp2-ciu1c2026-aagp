import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import { createPost, createPostImage } from "../services/posts";
import { getTags } from "../services/tags";
import type { Tag } from "../types/Tag";
import Toast from "../components/Toast/Toast";
import SideBar from "../components/SideBar/SideBar";
import PanelDerecho from "../components/PanelDerecho/PanelDerecho";

function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [texto, setTexto] = useState("");
  const [images, setImages] = useState<string[]>([""]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [errorTexto, setErrorTexto] = useState("");

  useEffect(() => {
    const cargarTags = async () => {
      try {
        const tags = await getTags();
        setAllTags(tags);
      } catch (error) {
        console.error(error);
      }
    };
    cargarTags();
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
      const validImages = images.filter(
        (img) => img.trim() !== ""
      );
      for (const url of validImages) {
        await createPostImage({
          url,
          postId: post._id,
        });
      }
      setMessage("Se publicó el post.");
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("No se pudo publicar el post.");
    }
  };

  return (
    <>
      {message && <Toast message={message} />}

      <div
        className="
                fixed
                inset-0
                bg-black/30
                backdrop-blur-[1px]
                flex
                items-center
                justify-center
                z-50
                p-4
            "
        onClick={() => navigate(-1)}
      >
        <form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className="bg-surface rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6"
        >
          <div className="flex justify-between items-center border-b border-border pb-4">
            <h1 className="text-2xl font-bold">
              Crear nuevo post
            </h1>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="
                        text-2xl
                        text-textSecondary
                        hover:text-text
                    "
            >
              ✕
            </button>
          </div>
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
              className="w-full border border-border rounded-lg p-3"
              rows={4}
            />

            {errorTexto && (
              <p className="mt-2 text-sm text-red-600">
                {errorTexto}
              </p>
            )}

            <label className="block mb-2 font-semibold">
              Imágenes
            </label>
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
                  className="w-full border border-border rounded-lg p-2"
                />
              ))}
            </div>
            {images.length < 4 && (
              <button
                type="button"
                onClick={addImageField}
                className="mt-2 text-primary hover:text-primaryDark"
              >
                + Agregar imagen
              </button>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag._id}
                  type="button"
                  onClick={() => actualizarSelectedTags(tag._id)}
                  className={
                    `px-3 py-1 rounded-lg border transition 
                                    ${selectedTags.includes(tag._id)
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
            className="w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-lg transition"
          >
            Publicar
          </button>
        </form>
      </div>
    </>
  );
}


export default CreatePost;
