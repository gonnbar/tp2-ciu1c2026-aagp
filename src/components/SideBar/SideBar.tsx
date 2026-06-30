import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import logo from "../../assets/logo.png";
import {
  HiHome,
  HiUser,
  HiPlusCircle,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

function SideBar() {
<<<<<<< HEAD
    const { logout } = useAuth();
    const location = useLocation();
=======
  const { logout } = useAuth();
>>>>>>> b9ef55cfe0ea8fe2fdedc20c4a84e4e45b2a7f68

  return (
    <aside className="hidden lg:block w-64">
      <div className="bg-surface rounded-xl shadow-md pt-6 pb-5 px-4">
        <nav className="flex flex-col gap-3">
          <div className="mt-6 flex justify-left mb-10 ml-2">
            <img
              src={logo}
              alt="UnaHur Anti-Social"
              className="w-auto sm:h-14 md:h-16 object-contain"
            />
          </div>

          <Link
            to="/home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer"
          >
            <HiHome className="w-6 h-6 transition group-hover:text-primary-dark" />
            <span className="transition group-hover:text-primary-dark">Inicio</span>
          </Link>

          <Link
            to="/profile"
            className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer"
          >
            <HiUser className="w-6 h-6 transition group-hover:text-primary-dark" />
            <span className="transition group-hover:text-primary-dark">
              Mi Perfil
            </span>
          </Link>

          <Link
            to="/create-post"
            state={{ backgroundLocation: location }}
            className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer"
          >
            <HiPlusCircle className="w-6 h-6 transition group-hover:text-primary-dark" />
            <span className="group-hover:text-primary-dark transition">
              Nueva Publicación
            </span>
          </Link>
          
          <button
            onClick={logout}
            className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer"
          >
            <HiArrowRightOnRectangle className="w-6 h-6 transition group-hover:text-primary-dark" />
            <span className="group-hover:text-primary-dark transition">
              Cerrar Sesión
            </span>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;
