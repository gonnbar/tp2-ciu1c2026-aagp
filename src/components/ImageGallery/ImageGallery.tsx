import type { Image } from "../../types/Image";

type Props = {
  images: Image[];
};

export default function ImageGallery({ images }: Props) {
  return (
    <div
      className="
            grid
            grid-cols-1
            sm:grid-cols-2
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
            aspect-square
            object-cover
          "
        />
      ))}
    </div>
  );
}
