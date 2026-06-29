import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import {
    createPost,
    createPostImage,
    getTags,
} from "../services/createPost";
import type { Tag } from "../types/Tag";

function CreatePost() {
    const { user } = useAuth();
    const navigate = useNavigate();

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
        setImages([...images, ""]);
    };

    const toggleTag = (tagId: string) => {
        if (selectedTags.includes(tagId)) {
            setSelectedTags(selectedTags.filter((id) => id !== tagId));
        } else {
            setSelectedTags([...selectedTags, tagId]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                            Publicar otro post
                        </button>

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background p-6">
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-surface rounded-2xl shadow-md p-6 space-y-6"
            >
                <h1 className="text-2xl font-bold text-text">
                    ¿Qué estás pensando?
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
                        className="w-full border border-border rounded-lg p-3"
                        rows={4}
                    />

                    {errorTexto && (
                        <p className="mt-2 text-sm text-red-600">
                            {errorTexto}
                        </p>
                    )}
                </div>        <div>
                    <label className="block mb-2 font-semibold">
                        URLs de imágenes
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

                    <button
                        type="button"
                        onClick={addImageField}
                        className="mt-2 text-primary hover:text-primaryDark"
                    >
                        + Agregar otra imagen
                    </button>
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
                                onClick={() => toggleTag(tag._id)}
                                className={`px-3 py-1 rounded-lg border transition 
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
    );
}

export default CreatePost;