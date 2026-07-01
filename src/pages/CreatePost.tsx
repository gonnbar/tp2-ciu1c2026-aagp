import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import { createPost, createPostImage } from "../services/posts";
import { getTags } from "../services/tags";
import type { Tag } from "../types/Tag";
import { useToast } from "../context/ToastContext";
import { HiOutlineXMark, HiOutlineTrash } from "react-icons/hi2";

function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { mostrarToast } = useToast();
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

  const removeImageField = (indexToRemove: number) => {
    if (images.length <= 1) return;
    setImages(images.filter((_,index) => index !== indexToRemove))
  }

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
      mostrarToast("Se publicó el post.");
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert("No se pudo publicar el post.");
    }
  };

  return (
    <>
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
          className="bg-[var(--surface-soft)] rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6 border border-[#F2ECFF]"
        >
          <div className="flex justify-between items-center border-b border-[#F2ECFF] pb-4">
            <h1 className="text-2xl font-bold">
              Crear nuevo post
            </h1>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="
                        text-3xl
                        text-secondary
                        hover:text-primary-dark
                        cursor-pointer
                    "
            >
              <HiOutlineXMark />
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
              className="mb-2 w-full rounded-md border border-border bg-surface p-2 text-text outline-none focus:border-primary"
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
            <div className="space-y-4">
              {images.map((image, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    value={image}
                    onChange={(e) =>
                      handleImageChange(index, e.target.value)
                    }
                    placeholder="https://..."
                    className="w-full rounded-md border border-border bg-surface p-2 text-text outline-none focus:border-primary"
                  />

                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImageField(index)} 
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                      title="Eliminar imagen"
                    >
                      <HiOutlineTrash className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {images.length < 4 && (
              <button
                type="button"
                onClick={addImageField}
                className="mt-2 text-primary hover:text-primary-dark cursor-pointer"
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
                    `px-3 py-1 rounded-full border transition 
                                    ${selectedTags.includes(tag._id)
                      ? "bg-secondary/20 text-primary border-primary"
                      : "bg-white border-border hover:bg-background"
                    }`}
                >
                  {tag.nombre}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="w-auto bg-primary hover:bg-primary-dark text-white text-lg px-8 py-3 rounded-xl transition cursor-pointer"
            >
             Publicar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatePost;