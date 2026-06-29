import { Link } from "react-router-dom";
import edit from '../../assets/edit.svg';
import user from '../../assets/user.svg';
import login from '../../assets/exit.svg';
import { useAuth } from "../../context/UserContext";

function sideBar(){
    const { logout } = useAuth();
    return(
    <aside className="w-full lg:w-60 rounded-xl bg-surface p-4 shadow-md">
            <nav className="flex flex-row lg:flex-col justify-around lg:justify-start gap-4">
                <Link to="/" className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white"> 
                <img src={user} alt="Inicio" className="w-5 h-5" />
                <span>Mi Perfil</span>
                </Link>
                <Link to="/" className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">
                <img src={edit} alt="Inicio" className="w-5 h-5" />
                <span>Nueva Publicacion</span>
                </Link>
                <button onClick={logout} className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">
                        <img src={login} alt="Cerrar sesión" className="w-5 h-5" />
                        <span>Cerrar Sesión</span>
                        </button>
            </nav>
    </aside>
    );
}
export default sideBar;