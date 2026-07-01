import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import logo from "../assets/logo.png"

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

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 pt-30">
      <div className="mx-auto w-full max-w-md rounded-xl bg-[var(--surface-soft)] shadow-lg px-6 py-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="Logo UnaHur" className="mx-auto h-15 w-auto" />
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-text"> Iniciar sesión </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && (
            <p className="mt-2 text-center text-red-500">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-3 space-y-4">
            <input
              className="w-full rounded-md border border-border bg-surface p-2 text-text outline-none focus:border-primary"
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <input
              className="w-full rounded-md border border-border bg-surface p-2 text-text outline-none focus:border-primary"
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
                  className="h-4 w-4"
                />
                <span className="text-sm">Recordarme</span>
              </label>

              <button
                type="button"
                onClick={() => navigate("/forgot-pass")}
                className="text-sm text-primary hover:text-primary-dark hover:underline cursor-pointer"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white text-lg px-4 py-2 rounded-lg cursor-pointer"
              type="submit">
              Entrar
            </button>
            <p className="text-center text-sm text-text-secondary">
              ¿No tenés una cuenta?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-sm text-primary hover:text-primary-dark hover:underline cursor-pointer"
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
