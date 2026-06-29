import { useState } from "react";
import type { Image } from "../../types/Image";

type Props = {
  images: Image[];
};

export default function ImageCarousel({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  if (images.length === 0) {
    return (
      <div
        className="
          bg-gray-50
          rounded-2xl
          py-16
          text-center
          text-text-secondary
        "
      >
        <div className="text-5xl mb-4">🖼️</div>

        <p>Esta publicación no tiene imágenes.</p>
      </div>
    );
  }

  function previousImage() {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextImage() {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="relative group">
      <img
        src={images[currentImage].url}
        alt={`Imagen ${currentImage + 1}`}
        className="
          w-full
          h-[420px]
          object-cover
          rounded-2xl
        "
      />

      {images.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="
              absolute
              top-1/2
              left-4
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              bg-black/75
              text-white
              text-3xl
              font-light
              flex
              items-center
              justify-center
              hover:bg-primary
              hover:scale-105
              transition
              shadow-lg
              cursor-pointer
              opacity-0
              group-hover:opacity-100
            "
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="
              absolute
              top-1/2
              right-4
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              bg-black/75
              text-white
              text-3xl
              flex
              items-center
              justify-center
              hover:bg-primary
              hover:scale-105
              transition
              shadow-lg
              cursor-pointer
              opacity-0
              group-hover:opacity-100
            "
          >
            ›
          </button>

          <div
            className="
                absolute
                top-4
                right-4
                bg-black/60
                text-white
                text-sm
                px-3
                py-1
                rounded-full
            "
          >
            {currentImage + 1} / {images.length}
          </div>

          <div
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              flex
              gap-2
            "
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`
                  w-3
                  h-3
                  rounded-full
                  transition

                  ${currentImage === index ? "bg-white" : "bg-white/50"}
                `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
