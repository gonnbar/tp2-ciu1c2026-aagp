import { Link } from "react-router-dom";
import bannerAbout from "../assets/banner_abt.png";
import bannerAboutMb from "../assets/banner_abt_mb.png";
import {
  HiOutlineAcademicCap,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
} from "react-icons/hi2";

function About() {
  return (
    <div className="min-h-screen py-10 px-6">
      <div
        className="
          max-w-7xl
          mx-auto
          bg-[var(--surface-soft)]
          backdrop-blur-md
          border
          border-[#F2ECFF]
          rounded-2xl
          shadow-[0_12px_40px_rgba(109,66,216,.07)]
          overflow-hidden
        "
      >
        <picture>
          <source media="(max-width: 700px)" srcSet={bannerAboutMb} />
          <img
            src={bannerAbout}
            alt="Banner"
            className="w-full md:h-96 object-cover"
          />
        </picture>

        <div className="p-8">
          <p className="text-text leading-relaxed mb-10">
            <strong>UnaHur Anti-Social Net</strong> es una red social creada
            exclusivamente para estudiantes de la Universidad Nacional de
            Hurlingham. Su objetivo es ofrecer un espacio donde compartir
            conocimientos, experiencias e ideas, fomentando una comunidad
            universitaria activa y colaborativa.
          </p>

          <div className="border-t border-[#F2ECFF] pt-8 space-y-10">
            <section>
              <div className="flex items-center gap-3 mb-3">
                <HiOutlineAcademicCap className="w-7 h-7 text-primary" />
                <h2 className="text-2xl font-semibold">Objetivo</h2>
              </div>

              <p className="text-text-secondary leading-relaxed">
                Nuestro propósito como desarrolladores fue construir una
                plataforma moderna donde los estudiantes puedan participar,
                expresarse y aprender unos de otros mediante publicaciones,
                comentarios e intercambio de ideas.
              </p>
            </section>

            <section className="border-t border-[#F2ECFF] pt-8 space-y-10">
              <div className="flex items-center gap-3 mb-5">
                <HiOutlineSparkles className="w-7 h-7 text-primary" />
                <h2 className="text-2xl font-semibold">¿Qué podés hacer?</h2>
              </div>

              <div className="space-y-4">
                <div
                  className="
                    rounded-xl
                    bg-secondary/10
                    border
                    border-[#F2ECFF]
                    p-5
                    transition
                    hover:bg-secondary/20
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <h3 className="font-semibold text-text mb-2">
                    Crear publicaciones
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    Compartí pensamientos, experiencias y conocimientos con toda
                    la comunidad universitaria.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    bg-secondary/10
                    border
                    border-[#F2ECFF]
                    p-5
                    transition
                    hover:bg-secondary/20
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <h3 className="font-semibold text-text mb-2">
                    Comentar e interactuar
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    Participá en conversaciones, respondé publicaciones y aportá
                    tus ideas a otros estudiantes.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    bg-secondary/10
                    border
                    border-[#F2ECFF]
                    p-5
                    transition
                    hover:bg-secondary/20
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <h3 className="font-semibold text-text mb-2">
                    Construir comunidad
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    Conectate con compañeros de distintas carreras para
                    aprender, compartir recursos y crecer juntos.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-[#F2ECFF] pt-8 space-y-10">
              <div className="flex items-center gap-3 mb-4">
                <HiOutlineCodeBracket className="w-7 h-7 text-primary" />
                <h2 className="text-2xl font-semibold">Equipo de desarrollo</h2>
              </div>

              <p className="text-text-secondary mb-5">
                Este proyecto fue desarrollado por:
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl text-primary-dark bg-secondary/20 px-4 py-3">
                  Avila, Paz María
                </div>

                <div className="rounded-xl text-primary-dark bg-secondary/20 px-4 py-3">
                  Barbosa, Gonzalo Nicolás
                </div>

                <div className="rounded-xl text-primary-dark bg-secondary/20 px-4 py-3">
                  Peralta, Melanie Ailén
                </div>

                <div className="rounded-xl text-primary-dark bg-secondary/20 px-4 py-3">
                  Rodríguez, Ana Paula
                </div>
              </div>
            </section>

            <div className="border-t border-[#F2ECFF] pt-6">
              <p className="text-sm text-text-secondary">
                Proyecto desarrollado como trabajo práctico para la materia
                <strong> Construcción de Interfaces de Usuario</strong>.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/home"
                className="
                  rounded-xl
                  bg-primary
                  px-8
                  py-3
                  text-white
                  font-medium
                  hover:bg-primary-dark
                  transition
                  shadow-md
                "
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
