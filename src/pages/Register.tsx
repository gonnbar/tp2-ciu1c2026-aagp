import { Link } from "react-router-dom";
import logo from '../assets/imageLOGO.png';

function Registro() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-4 lg:px-8">

      {/* Boton para volver a la pagina de home */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center rounded-lg border border-primary px-3 py-1.5 text-sm text-primary hover:bg-primary hover:text-white">
          Volver
        </Link>
      </div>

      <div className="bg-white shadow-md flex flex-col justify-center px-4 py-6 lg:px-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="Logo UnaHur" className="mx-auto h-15 w-auto"/>
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-text"> Crear cuenta </h2>
        </div>

        {/* formulario */}
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-text"> Nombre</label>

              <div className="mt-2">
                <input id="nombre" name="nombre" type="text" className="block w-full rounded-md border border-border bg-surface px-3 py-1.5 text-text outline-none focus:border-primary"/>
              </div>
            </div>

            <div>
              <label  htmlFor="email" className="block text-sm font-medium text-text"> Email</label>

              <div className="mt-2">
                <input id="email" name="email"  type="email" className="block w-full rounded-md border border-border bg-surface px-3 py-1.5 text-text outline-none focus:border-primary"/>
              </div>
            </div>

            <div>
              <label htmlFor="contraseña" className="block text-sm font-medium text-text">
                Contraseña
              </label>

              <div className="mt-2">
                <input id="contraseña"name="contraseña" type="password" className="block w-full rounded-md border border-border bg-surface px-3 py-1.5 text-text outline-none focus:border-primary"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white">Registrarse </button>
            </div>
          </form>

          {/* Ultima parte --> pregunta + inicio de sesion */}
          <p className="mt-5 text-center text-sm text-text-secondary">
            ¿Ya tenés una cuenta?{" "}
            <Link to="/login" className="font-semibold text-primary hover:text-primary-dark">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Registro;