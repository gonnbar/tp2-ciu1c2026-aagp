import { createContext, useContext, useState} from "react";
import type { AuthContextType, LoginData, User } from "../types/User";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(()=>{
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  async function login(data: LoginData): Promise<boolean> {
    const db = await fetch("http://localhost:3000/users")
    const users = await db.json();

    const foundUser = users.find(
      (user: any) => user.nickname === data.nickname
    )

    if(!foundUser){
      return false;
    }

    const foundRes = await fetch(`http://localhost:3000/users/${foundUser._id}`)
    const loggedUser = await foundRes.json();

    if(loggedUser.user.password !== data.password){
      return false;
    }

    const userData: User = {
      _id: foundUser._id,
      nickname: foundUser.nickname,
      email: loggedUser.user.email,
    }

    setUser(userData)

    if (data.rememberMe) {
      localStorage.setItem("user", JSON.stringify(userData))
    }

    return true;
  }

  function logout() {
    localStorage.removeItem("user")
    setUser(null);
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if(context === undefined) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider")
  }

  return context;
}
