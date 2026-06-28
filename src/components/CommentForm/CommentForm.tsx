import { useEffect, useRef, useState, type SubmitEvent } from "react";

const MAX_CHARACTERS = 500;

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
        flex-col
        gap-4
      "
    >
      <div className="flex-1">
        <div
          className="
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
            maxLength={MAX_CHARACTERS}
            placeholder="Escribí tu comentario..."
            className="
              block
              w-full
              bg-white
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

        <p
          className="
            text-xs
            text-right
            mt-2
            text-text-secondary
          "
        >
          {content.length}/{MAX_CHARACTERS}
        </p>
      </div>

      <button
        type="submit"
        disabled={!content.trim()}
        className="
          bg-primary
          hover:bg-primary-dark
          disabled:bg-gray-300
          disabled:cursor-not-allowed
          text-white
          px-8
          py-3
          rounded-xl
          font-medium
          transition
          rounded-xl
          cursor-pointer
        "
      >
        Comentar
      </button>
    </form>
  );
}
