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
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          <Link to="/"className="rounded-lg border border-primary px-4 py-2 text-primary text-center">Iniciar Sesion</Link>
       <Link to="/registro" className="rounded-lg bg-primary-dark px-6 py-2 text-white"> Registrarse </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
