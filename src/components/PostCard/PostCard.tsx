export type PostCardProps = {
  usuario: string;
  fecha: string;
  contenido: string;
  imagen: string;
};
function PostCard({
  usuario,
  fecha,
  contenido,
  imagen,
}: PostCardProps) {
  return (
    <div className="mb-6 rounded-xl bg-surface p-5 shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-text">{usuario}</h3>
        <p className="text-sm text-text-secondary">{fecha}</p>
      </div>
      <p className="mb-4 text-text">{contenido}</p>
      <img src={imagen} alt="Publicación" className="w-80 rounded-lg object-cover"/>
    </div>
  );
}
export default PostCard;