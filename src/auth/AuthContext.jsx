import { createContext, useCallback, useContext, useMemo, useState } from "react";
import * as auth from "./auth.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => auth.getSession());

  const login = useCallback(async (id, pw) => {
    const s = await auth.login(id, pw);
    if (s) setSession(s);
    return s;
  }, []);

  const logout = useCallback(() => {
    auth.logout();
    setSession(null);
  }, []);

  const updateProfile = useCallback((patch) => {
    const next = auth.updateProfile(patch);
    if (next) setSession(next);
    return next;
  }, []);

  const value = useMemo(
    () => ({ session, login, logout, updateProfile, checkPassword: auth.checkPassword }),
    [session, login, logout, updateProfile]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
