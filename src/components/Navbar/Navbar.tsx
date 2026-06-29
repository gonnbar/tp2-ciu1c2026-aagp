import { Link } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import logo from "../../assets/imageLOGO.png";

function NavBar () {
   const { logout } = useAuth();
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <Link to="/home" className="flex items-center gap-3">
            <img src={logo} alt="Logo Unahur" className="h-10 w-10"></img>
             <span className="text-2xl font-bold text-black"> Unahur</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
         <button onClick={logout} className="rounded-lg px-4 py-2 text-text hover:text-gray-500 transition">
              Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
