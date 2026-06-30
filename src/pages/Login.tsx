import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import logo from "../assets/imageLOGO.png"

export default function LoginForm() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setError("");

    const ok = await login({ nickname, password, rememberMe });

    if (ok) navigate("/home");
    else setError("Usuario o contraseña inválidos");
  };

  return (

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-center px-4 py-6 lg:px-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="Logo UnaHur" className="mx-auto h-15 w-auto" />
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-text"> Iniciar sesión </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && (
            <p className="mt-2 text-center text-red-500">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-3">
            <input
              className="w-full border border-gray-300 rounded-lg p-2"
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <input
              className="w-full border border-gray-300 rounded-lg p-2"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                />
                <span>Recordarme</span>
              </label>

              <button
                type="button"
                onClick={() => navigate("/forgot-pass")}
                className="text-violet-600 hover:text-violet-700 text-xs hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg"
              type="submit">
              Entrar
            </button>
            <p className="mt-4 text-center text-xs text-gray-600">
              ¿No tenés una cuenta?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="font-medium text-violet-600 hover:text-violet-700 hover:underline"
              >
                Registrate
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
