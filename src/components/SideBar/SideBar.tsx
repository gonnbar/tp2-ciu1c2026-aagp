import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import logo from "../../assets/logo.png";
import personaje from "../../assets/personaje_sb.png";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlinePencilSquare,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

function SideBar() {
  const { logout } = useAuth();
  const location = useLocation();

  const isHome =
    location.pathname === "/home" ||
    location.pathname === "/about" ||
    location.pathname.startsWith("/post/");

  return (
    <aside className="hidden lg:block w-64 h-[calc(100vh-3rem)]">
      <div
        className="
          h-full
          rounded-2xl
          bg-[var(--surface-soft)]
          shadow-[0_12px_40px_rgba(109,66,216,.07)]
          border
          border-[#F2ECFF]
          pt-6
          pb-6
          px-4
          flex
          flex-col
        "
      >
        <div className="mt-6 flex justify-left mb-10 ml-2">
          <img
            src={logo}
            alt="UnaHur Anti-Social"
            className="w-auto sm:h-14 md:h-16 object-contain"
          />
        </div>

        <nav className="flex flex-col gap-3">
          <Link
            to="/home"
            className={`group flex items-center gap-4 font-medium rounded-xl px-4 py-3 transition cursor-pointer
                ${
                  isHome
                    ? "bg-secondary/20 text-primary-dark"
                    : "text-text hover:bg-secondary/20"
                }
              `}
          >
            <HiOutlineHome className="w-6 h-6 transition group-hover:text-primary-dark" />
            <span className="transition group-hover:text-primary-dark">
              Inicio
            </span>
          </Link>

          <Link
            to="/profile"
            className={`group flex items-center gap-4 font-medium rounded-xl px-4 py-3 transition cursor-pointer
                ${
                  location.pathname === "/profile"
                    ? "bg-secondary/20 text-primary-dark"
                    : "text-text hover:bg-secondary/20"
                }
              `}
          >
            <HiOutlineUser className="w-6 h-6 transition group-hover:text-primary-dark" />
            <span className="transition group-hover:text-primary-dark">
              Mi Perfil
            </span>
          </Link>

          <Link
            to="/create-post"
            state={{ backgroundLocation: location }}
            className="group flex items-center gap-4 mb-8 font-medium rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer w-full"
          >
            <HiOutlinePencilSquare className="w-6 h-6 shrink-0 transition group-hover:text-primary-dark" />
            <span className="whitespace-nowrap group-hover:text-primary-dark transition">
              Nueva Publicación
            </span>
          </Link>
        </nav>

        <div className="border-t border-[#F2ECFF]" />

        <button
          onClick={logout}
          className="group flex items-center gap-4 font-medium rounded-xl px-4 py-3 mt-8 transition hover:bg-secondary/20 cursor-pointer"
        >
          <HiArrowRightOnRectangle className="w-6 h-6 transition group-hover:text-primary-dark" />
          <span className="group-hover:text-primary-dark transition">
            Cerrar Sesión
          </span>
        </button>

        <div className="flex-1" />

        <div className="flex flex-col items-center px-2 pb-2">
          <img
            src={personaje}
            alt="Personaje"
            className="
              w-24
              object-contain
              drop-shadow-lg
              select-none
              pointer-events-none
            "
          />

          <div
            className="
              mt-3
              w-full
              rounded-2xl
              bg-secondary/10
              border
              border-secondary/20
              p-4
              shadow-[0_8px_20px_rgba(109,66,216,.08)]
            "
          >
            <p
              className="
              text-center
              text-sm
              text-text-secondary
              leading-relaxed
            "
            >
              Conectamos personas
              <br />
              que prefieren no
              <br />
              estar conectadas. 
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
