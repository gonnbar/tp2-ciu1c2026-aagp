import { Link } from "react-router-dom";
import logo from "../../assets/imageLOGO.png"

function NavBar () {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo Unahur" className="h-10 w-10"></img>
             <span className="text-2xl font-bold text-black">UnaHur</span>
        </Link>
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/"className="rounded-lg border border-primary px-6 py-2 text-primary">Inicar Sesion</Link>
       <Link to="/registro" className="rounded-lg bg-primary-dark px-6 py-2 text-white"> Registrarse </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
