import { Link } from "react-router-dom";

function sideBar(){
    return(
    <aside className="w-full lg:w-60 rounded-xl bg-surface p-4 shadow-md">
            <nav className="flex flex-row lg:flex-col justify-around lg:justify-start gap-4">
                <Link to="/Home" className="rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">Inicio</Link>
                <Link to="/" className="rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white"> Mi Perfil</Link>
                <Link to="/" className="rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white">Nueva Publicación</Link>
            </nav>
    </aside>
    );
}
export default sideBar;