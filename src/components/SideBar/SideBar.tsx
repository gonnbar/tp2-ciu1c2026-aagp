import { Link } from "react-router-dom";
//import sideBarImg from '../../assets/sideBarImg.png'
// <img src={sideBarImg} className="mx-auto mt-6 h-80 w-auto"/>
// la imagen no se si ponerla porque queda como rara... vere
function sideBar(){
    return(
            <aside className="sticky w-60 shrink-0 self-start rounded-xl bg-surface p-6 shadow-md">
                <nav className="flex flex-col gap-4">
                    <Link to="/Home"className="rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white"> Inicio </Link>
                    <Link to="/" className="rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white ">Mi Perfil </Link>
                    <Link to="/" className="rounded-lg px-4 py-2 text-text hover:bg-primary hover:text-white"> Nueva Publicación </Link>
                </nav>
        </aside>
    );
}
export default sideBar;