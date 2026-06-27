import { useState, type SubmitEvent } from "react";

export default function CommentForm() {
  const [content, setContent] = useState("");

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (!content.trim()) {
      alert("El comentario no puede estar vacío.");

      return;
    }

    console.log(content);

    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="
            w-full
            border
            p-3
            rounded
        "
      />

      <button
        className="
            mt-4
            bg-violet-600
            text-white
            px-4
            py-4
            rounded
        "
      >
        Comentar
      </button>
    </form>
  );
}
