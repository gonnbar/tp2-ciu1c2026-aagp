import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import logo from '../assets/logo.png';
import { validarRegistro } from "../validaciones/validacion";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errores, setErrores] = useState({
    nickname: "",
    email: "",
    contraseña: "",
  });
  const [mensaje, setMensaje] = useState("");
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const resultado = validarRegistro(
      nickname,
      email,
      contraseña
    );
    setErrores(resultado.errores);
    if (!resultado.valido) {
      return;
    }
    try {
      const respuesta = await fetch(
        "http://localhost:3000/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nickname,
            email,
            password:contraseña,
          }),
        }
      );
      const data = await respuesta.json();
      if (!respuesta.ok) {     
      console.log("Error del backend:", data);
        if (data.error?.includes("nickname")) {
          setMensaje("El nickname ya está registrado");
        } else {
          setMensaje(
            data.message || "No se pudo crear el usuario"
          );
  }
  return;
}
      console.log("Usuario creado:", data);
      setMensaje("Usuario creado correctamente");
        setTimeout(() => {
        navigate("/login");
        }, 1500);
      setNickname("");
      setEmail("");
      setContraseña("");
    } catch (error) {
      console.log(
        "Error conectando con el servidor:",
        error
      );
      setMensaje(
        "No se pudo conectar con el servidor"
      );
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 pt-30">
      <div className="mx-auto w-full max-w-md rounded-xl bg-[var(--surface-soft)] shadow-lg px-6 py-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="Logo UnaHur" className="mx-auto h-15 w-auto"/>
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-text"> Crear cuenta </h2>
        </div>
        
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-3 space-y-4">
            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-text"> Nombre</label>
              <div className="mt-2">
                <input id="nickname" name="nickname" type="text"  value={nickname}
                onChange={(e) => setNickname(e.target.value)} className="block w-full rounded-md border border-border bg-surface px-3 py-1.5 text-text outline-none focus:border-primary"/>
               {
                  errores.nickname && (
                    <p className="mt-1 text-sm text-red-500">
                      {errores.nickname}
                    </p>
                  )
                }
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text"> Email</label>
              <div className="mt-2">
                <input id="email" name="email"  type="email"  value={email}
                onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md border border-border bg-surface px-3 py-1.5 text-text outline-none focus:border-primary"/>
              {
                errores.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errores.email}
                  </p>
                )
              }
              </div>
            </div>
            <div>
              <label htmlFor="contraseña" className="block text-sm font-medium text-text">
                Contraseña
              </label>
              <div className="mt-2">
                <input id="contraseña"name="contraseña" type="password" value={contraseña}
                onChange={(e) => setContraseña(e.target.value)} className="block w-full rounded-md border border-border bg-surface px-3 py-1.5 text-text outline-none focus:border-primary"/>
              {
                errores.contraseña && (
                  <p className="mt-1 text-sm text-red-500">
                    {errores.contraseña}
                  </p>
                )
              }
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-lg bg-primary hover:bg-primary-dark px-4 py-2 text-white text-lg cursor-pointer">Registrarse </button>
            </div>
          </form>
          {
            mensaje && (
              <p className="mt-4 text-center text-sm text-green-600">
                {mensaje}
              </p>
            )
          }
          <p className="text-center text-sm text-text-secondary">
            ¿Ya tenés una cuenta?{" "}
            <Link to="/login" className="text-sm text-primary hover:text-primary-dark hover:underline cursor-pointer">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}