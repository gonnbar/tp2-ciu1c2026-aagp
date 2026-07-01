import { useEffect, useState } from "react";
import type { Tag } from "../../types/Tag";
import { getTags } from "../../services/tags";
import { HiHashtag } from "react-icons/hi2";

function PanelDerecho() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function cargarTags() {
      try {
        const data = await getTags();
        setTags(data);
      } catch (error) {
        console.error(error);
      }
    }

    cargarTags();
  }, []);

  const tagsVisibles = showAll ? tags : tags.slice(0, 5);

  return (
    <aside className="hidden lg:block  w-full">
      <div className="flex flex-col gap-6">

        <div className="rounded-2xl bg-surface shadow-md p-6">
          <h2 className="text-xl font-bold text-text mb-6">
            Etiquetas Populares
          </h2>

          <div className="space-y-5">
            {tagsVisibles.map((tag) => (
              <button
                key={tag._id}
                className="
                  flex
                  items-center
                  gap-3
                  w-full
                  text-left
                  group
                  cursor-pointer
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-full
                    bg-secondary/20
                    shrink-0
                  "
                >
                  <HiHashtag className="text-primary text-xl" />
                </div>

                <span
                  className="
                    text-text
                    font-medium
                    group-hover:text-primary
                    transition-colors
                  "
                >
                  {tag.nombre}
                </span>
              </button>
            ))}
          </div>

          {tags.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                mt-8
                w-full
                rounded-xl
                bg-secondary/20
                text-primary
                font-semibold
                py-3
                hover:bg-secondary/30
                transition
                cursor-pointer
              "
            >
              {showAll ? "Ver menos" : "Ver todas"}
            </button>
          )}
        </div>

        <div className="rounded-2xl bg-surface shadow-md p-6">
          <h2 className="text-xl font-bold text-text mb-4">
            UNAHUR
          </h2>

          <p className="text-sm text-text-secondary leading-relaxed">
            UnaHur Anti-Social Net es una red social diseñada exclusivamente
            para los estudiantes de la Universidad Nacional de Hurlingham. Aquí
            podés compartir publicaciones, hacer consultas, intercambiar
            apuntes, debatir sobre materias, recomendar recursos y conectar con
            otros estudiantes de la comunidad. Buscamos crear un espacio donde
            el aprendizaje colaborativo y la participación sean los
            protagonistas, dejando de lado el ruido de las redes sociales
            tradicionales. 
            <br /><br />
            Menos ruido, más vos.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default PanelDerecho;