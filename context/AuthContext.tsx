"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type StoredUser = User & { password: string };

type AuthContextType = {
  user: User | null;
  register: (data: StoredUser) => { success: boolean; error?: string };
  login: (emailOrPhone: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const USERS_KEY = "pchouse_users";
const SESSION_KEY = "pchouse_session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const session = localStorage.getItem(SESSION_KEY);
      if (session) setUser(JSON.parse(session));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  const getUsers = (): StoredUser[] => {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const register: AuthContextType["register"] = (data) => {
    const users = getUsers();
    const exists = users.find(
      (u) => u.email.toLowerCase() === data.email.toLowerCase() || u.phone === data.phone
    );
    if (exists) {
      return { success: false, error: "An account with this email or phone already exists." };
    }
    const updated = [...users, data];
    localStorage.setItem(USERS_KEY, JSON.stringify(updated));

    const { password, ...publicUser } = data;
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
    setUser(publicUser);
    return { success: true };
  };

  const login: AuthContextType["login"] = (emailOrPhone, password) => {
    const users = getUsers();
    const found = users.find(
      (u) =>
        (u.email.toLowerCase() === emailOrPhone.toLowerCase() || u.phone === emailOrPhone) &&
        u.password === password
    );
    if (!found) {
      return { success: false, error: "Invalid phone/email or password." };
    }
    const { password: _pw, ...publicUser } = found;
    localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser));
    setUser(publicUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  if (!hydrated) return null;

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}