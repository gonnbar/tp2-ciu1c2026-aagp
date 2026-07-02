import { useEffect, useState } from "react";
import type { Tag } from "../../types/Tag";
import { getTags } from "../../services/tags";
import { HiHashtag } from "react-icons/hi2";
import { Link } from "react-router-dom";

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
        <div
          className="
            rounded-2xl
            bg-[var(--surface-soft)]
            shadow-[0_12px_40px_rgba(109,66,216,.07)]
            border
            border-[#F2ECFF]
            p-6
          "
        >
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
                rounded-2xl
                bg-secondary/20
                border
                border-primary/20
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

        <div
          className="
            rounded-2xl
            bg-[var(--surface-soft)]
            shadow-[0_12px_40px_rgba(109,66,216,.07)]
            border
            border-[#F2ECFF]
            p-6
          "
        >
          <div className="mt-3 flex justify-center">
            <div className="max-w-[220px]">
              <h2 className="text-xl font-bold text-text mb-4">Sobre nosotros</h2>

              <p className="text-sm text-text-secondary leading-6">
                UnaHur Anti-Social Net es una red social diseñada para los estudiantes de la
                Universidad Nacional de Hurlingham. 
                Acá podés compartir posteos, hacer consultas, intercambiar
                apuntes, recomendar recursos y conectar con
                otros estudiantes de la comunidad. Buscamos crear un espacio donde
                el aprendizaje colaborativo y la participación sean los
                protagonistas, dejando de lado el ruido de las redes sociales
                tradicionales.
                <br /> <br />
                Menos ruido, más vos.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              to="/about"
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-primary/20
                bg-primary/10
                px-4
                py-2
                text-sm
                font-medium
                text-primary-dark
                transition
                hover:bg-primary/20
              "
            >
              Conocer más
            </Link>
          </div>
        </div>

        <div className="mt-4 p-5">
          <div
            className="
              flex
              flex-wrap
              gap-x-2
              gap-y-1
              text-xs
              text-text-secondary
              leading-5
            "
          >
            <button className="hover:text-primary transition">Términos</button>

            <span>·</span>

            <button className="hover:text-primary transition">
              Privacidad
            </button>

            <span>·</span>

            <button className="hover:text-primary transition">Cookies</button>

            <span>·</span>

            <button className="hover:text-primary transition">
              Accesibilidad
            </button>

            <span>·</span>

            <button
              className="
                hover:text-primary
                transition
                cursor-pointer
              "
            >
              Más opciones
            </button>
          </div>

          <p className="mt-4 text-xs text-text-secondary">
            © 2026 UnaHur Anti-Social Net
          </p>
        </div>
      </div>
    </aside>
  );
}

export default PanelDerecho;
