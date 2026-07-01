import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/User"
import logo from "../assets/logo.png"

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [user, setUser] = useState<User | null>(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleContinue(e: React.SubmitEvent) {
    e.preventDefault();

    setError("");

    try {
      const usersRes = await fetch("http://localhost:3000/users");
      const users = await usersRes.json();

      const foundUser = users.find(
        (u: any) => u.nickname === nickname
      );

      if (!foundUser) {
        setError("Usuario inexistente.");
        return;
      }

      const userRes = await fetch(
        `http://localhost:3000/users/${foundUser._id}`
      );

      const data = await userRes.json();

      if (data.user.email !== email) {
        setError("El email no coincide con el usuario.");
        return;
      }

      setUser(data.user);
      setStep(2);

    } catch {
      setError("Ocurrió un error.");
    }
  }

  async function handleChangePassword(e: React.SubmitEvent) {
    e.preventDefault();

    setError("");

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (!user) return;

    try {
      const updatedUser = {
        nickname: user.nickname,
        email: user.email,
        password: newPassword,
      };
      const response = await fetch(
        `http://localhost:3000/users/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const body = await response.text();
      console.log(body);
      if (!response.ok) {
        setError("No se pudo actualizar la contraseña.");
        return;
      }

      setSuccess("Contraseña actualizada correctamente.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch {
      setError("Ocurrió un error.");
    }
  }

  return (
    <div className="flex min-h-ful flex-col justify-center px-6 py-12 lg:px-8 pt-30">

      <div className="mx-auto w-full max-w-md rounded-xl bg-[var(--surface-soft)] shadow-lg px-6 py-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

          <img src={logo} alt="Logo UnaHur" className="mx-auto h-15 w-auto" />
          <h2 className="mt-6 mb-6 text-center text-2xl font-bold tracking-tight text-text">
            Recuperar contraseña
          </h2>

          {step === 1 && (
            <form
              onSubmit={handleContinue}
              className="p-6 flex flex-col gap-3 space-y-4"
            >
              <input
                className="w-full rounded-md border border-border bg-surface p-2 text-text outline-none focus:border-primary"
                type="text"
                placeholder="Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />

              <input
                className="w-full rounded-md border border-border bg-surface p-2 text-text outline-none focus:border-primary"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="bg-primary hover:bg-primary-dark text-white text-lg px-4 py-2 rounded-lg cursor-pointer"
              >
                Continuar
              </button>
            </form>
          )}

          {step === 2 && (
            <form
              onSubmit={handleChangePassword}
              className="p-6 flex flex-col gap-3"
            >
              <input
                className="w-full border border-gray-300 rounded-lg p-2"
                type="password"
                placeholder="Nueva contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <input
                className="w-full border border-gray-300 rounded-lg p-2"
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                className="rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
              >
                Cambiar contraseña
              </button>
            </form>
          )}

          {error && (
            <p className="mt-4 text-center text-sm text-red-500">
              {error}
            </p>
          )}

          {success && (
            <p className="mt-4 text-center text-sm text-green-600">
              {success}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
