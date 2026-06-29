import comentario from '../../assets/comentario.svg'
import { Link } from "react-router-dom";
export type PostCardProps = {
  id:string,
  usuario: string;
  fecha: string;
  contenido: string;
  imagen: string;
  tags: {
    _id: string;
    nombre: string;
  }[];
  comments: {
    _id: string;
    content: string;
    userId: {
      _id: string;
      nickname: string;
    };
  }[];
};
function PostCard({
  id,
  usuario,
  fecha,
  contenido,
  imagen,
  tags,
  comments
}: PostCardProps) {
  return (
    <div className="mb-6 rounded-xl bg-surface p-5 shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-text">{usuario}</h3>
            <p className="text-sm text-text-secondary">
              {new Date(fecha).toLocaleDateString("es-AR", {day: "numeric", month: "long",year: "numeric",})}
            </p>
          </div>
          <p className="mb-4 text-text">{contenido}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag._id}className="rounded-full bg-primary/10 px-3 py-1 text-sm text-secondary">
                # {tag.nombre}
              </span>
            ))}
          </div>
       <Link to={`/post/${id}`} className="flex items-center gap-2 text-gray-500 hover:text-primary transition">
        <img src={comentario} alt="Comentarios" className="w-4 h-4"/>
        <span>
          {comments.length} comentarios
        </span>
      </Link>
        </div>
        <div className="flex flex-col items-center">
          <img src={imagen} alt="Publicación" className="w-72 rounded-lg object-cover"/>
         <Link to={`/post/${id}`}className="mt-4 rounded-lg bg-primary px-4 py-2 text-white hover:opacity-90 text-center"> Ver más</Link>
        </div>
      </div>
    </div>
  );
}
export default PostCard;