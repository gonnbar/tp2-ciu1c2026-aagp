import { Link } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import logo from '../../assets/logoBienvenida.png';
import {
  HiHome,
  HiUser,
  HiPlusCircle,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

function SideBar() {
    const { logout } = useAuth();

    return (
        <aside className="hidden lg:block w-64">
            <div className="bg-surface rounded-xl shadow-md pt-6 pb-5 px-4">
                <nav className="flex flex-col gap-3">

                    <Link to="/home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer">
                        <HiHome className="w-5 h-5 transition group-hover:text-primary" />
                        <span className="group-hover:text-primary transition">Inicio</span>
                    </Link>

                    <Link to="/profile" className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer">
                        <HiUser className="w-5 h-5 transition group-hover:text-primary" />
                        <span className="group-hover:text-primary transition">Mi Perfil</span>
                    </Link>

                    <Link to="/create-post" className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer">
                        <HiPlusCircle className="w-5 h-5 transition group-hover:text-primary" />
                        <span className="group-hover:text-primary transition">Nueva Publicación</span>
                    </Link>

                    <button onClick={logout} className="group flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary/20 cursor-pointer">
                        <HiArrowRightOnRectangle className="w-5 h-5 transition group-hover:text-primary" />
                        <span className="group-hover:text-primary transition">Cerrar Sesión</span>
                    </button>

                    <div className="mt-6 flex justify-center">
                        <img src={logo} alt="Logo" className="w-32 h-auto"/>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default SideBar;