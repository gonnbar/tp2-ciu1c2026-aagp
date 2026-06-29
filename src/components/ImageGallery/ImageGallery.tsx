import type { Image } from "../../types/Image";

type Props = {
  images: Image[];
};

export default function ImageGallery({ images }: Props) {
  return (
    <div
      className="
            grid
            grid-cols-2
            gap-4
            my-6
        "
    >
      {images.map((image) => (
        <img
          key={image._id}
          src={image.url}
          alt="Post"
          className="
            w-full
            h-[350px]
            object-cover
            rounded-2xl
            mb-8
          "
        />
      ))}
    </div>
  );
}
