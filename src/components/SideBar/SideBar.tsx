import { Link } from "react-router-dom";
import edit from '../../assets/edit.svg';
import user from '../../assets/user.svg';
import login from '../../assets/exit.svg';
import home from '../../assets/home.svg';
import logo from '../../assets/logoBienvenida.png';
import { useAuth } from "../../context/UserContext";
import { useState } from "react";

function SideBar() {
    const { logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <aside className="relative lg:w-64">
            <button onClick={() => setMenuOpen(!menuOpen)}className="lg:hidden mb-3 rounded-lg bg-surface p-3 shadow-md text-text"> ☰</button>
            <div className={`bg-surface rounded-xl shadow-md p-4 transition-all duration-300 lg:block ${menuOpen ? "block" : "hidden"}`}>
                <nav className="flex flex-col gap-4">
                    <Link  to="/home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">
                        <img src={home} alt="Inicio" className="w-5 h-5" />
                        <span>Inicio</span>
                    </Link>
                    <Link to="" className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">
                        <img src={user} alt="Perfil" className="w-5 h-5" />
                        <span>Mi Perfil</span>
                    </Link>
                    <Link to="/create-post" className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">
                        <img src={edit} alt="Nueva publicación" className="w-5 h-5" />
                        <span>Nueva Publicación</span>
                    </Link>
                    <button onClick={logout}className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">
                        <img src={login} alt="Cerrar sesión" className="w-5 h-5" />
                        <span>Cerrar Sesión</span>
                    </button>
                    <div className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="w-32 h-auto"/>
                </div>
                </nav>
            </div>
        </aside>
    );
}
export default SideBar;