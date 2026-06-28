import { Link } from "react-router-dom";
import login from '../../assets/exit.svg';
import agregarUsuario from '../../assets/user-add.svg';

function panelAbajo(){
    return(
    <aside className="w-full lg:w-60 rounded-xl bg-surface p-4 shadow-md">
            <nav className="flex flex-row lg:flex-col justify-around lg:justify-start gap-4">
                <Link to="/Login" className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">
                <img src={login} alt="Inicio" className="w-5 h-5" />
                <span>Inicio Sesion</span>
                </Link>
                <Link to="/perfil" className="flex items-center gap-3 rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white"> 
                <img src={agregarUsuario} alt="Inicio" className="w-5 h-5" />
                <span>Mi Perfil</span>
                </Link>
            </nav>
    </aside>
    );
}
export default panelAbajo;