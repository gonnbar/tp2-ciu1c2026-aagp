import { HiArrowUp } from "react-icons/hi2";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-25
        right-4
        rounded-full
        bg-primary
        text-white
        p-3
        shadow-lg
        hover:bg-primary-dark
        transition
        cursor-pointer
        "
    >
      <HiArrowUp className="w-4 h-4 stroke-2" />
    </button>
  );
}
