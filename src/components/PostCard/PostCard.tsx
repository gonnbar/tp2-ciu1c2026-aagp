export type PostCardProps = {
  usuario: string;
  fecha: string;
  contenido: string;
  imagen: string;
  tags: {
    _id: string;
    nombre: string;
  }[];
};
function PostCard({
  usuario,
  fecha,
  contenido,
  imagen,
  tags
}: PostCardProps) {
  return (
    <div className="mb-6 rounded-xl bg-surface p-5 shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">{usuario}</h3>
            <p className="text-sm text-text-secondary">{fecha}</p>
          </div>
          <p className="mb-4 text-text">{contenido}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag._id}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                #{tag.nombre}
              </span>
            ))}
          </div>
          <button className="text-primary hover:underline">
            Ver comentarios
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img src={imagen} alt="Publicación" className="w-72 rounded-lg object-cover"/>
          <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-white hover:opacity-90">Ver más</button>
        </div>
      </div>
    </div>
  );
}
export default PostCard;