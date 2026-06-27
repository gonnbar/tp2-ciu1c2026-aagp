import { useEffect, useRef, useState, type SubmitEvent } from "react";

export default function CommentForm() {
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "48px";
    }
  }, []);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (!content.trim()) {
      alert("El comentario no puede estar vacío.");

      return;
    }

    console.log(content);

    alert("Comentario enviado (prueba)");

    setContent("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "48px";
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "48px";

      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 160) + "px";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        gap-4
        items-end
      "
    >
      <div
        className="
          flex-1
          border
          border-border
          rounded-xl
          overflow-hidden
          bg-white
          focus-within:ring-2
          focus-within:ring-primary
        "
      >
        <textarea
          ref={textareaRef}
          value={content}
          onChange={handleChange}
          placeholder="Escribí tu comentario..."
          className="
            block
            w-full
            bg-surface
            px-4
            py-3
            leading-5
            max-h-40
            overflow-y-auto
            resize-none
            outline-none
        "
        />
      </div>

      <button
        type="submit"
        className="
          bg-primary
          hover:bg-primary-dark
          text-white
          px-6
          py-4
          rounded-xl
          font-medium
          transition
          whitespace-nowrap
        "
      >
        Comentar
      </button>
    </form>
  );
}
