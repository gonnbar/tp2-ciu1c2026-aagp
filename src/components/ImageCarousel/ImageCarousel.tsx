import { useState } from "react";
import type { Image } from "../../types/Image";

type Props = {
  images: Image[];
};

export default function ImageCarousel({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  if (images.length === 0) {
    return null;
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
              left-2
              -translate-y-1/2
              w-11
              h-11
              md:w-10
              md:h-10
              rounded-full
              bg-black/60
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              cursor-pointer
              z-20
              xl:opacity-0
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
              right-2
              -translate-y-1/2
              w-11
              h-11
              md:w-10
              md:h-10
              rounded-full
              bg-black/60
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              cursor-pointer
              z-20
              xl:opacity-0
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
