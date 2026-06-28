export type User = {
  _id: string;
  nickname: string;
  email: string;
};

export type LoginData = {
  nickname: string;
  password: string;
  rememberMe: boolean;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (data: LoginData) => Promise<boolean>;
  logout: () => void;
};
