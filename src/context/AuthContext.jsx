import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser, removeUser] = useLocalStorage("user");

  const generateUserLoginDatas = (userData) => {
    setUser(userData);
  };

  const generateUserLogoutDatas = () => {
    removeUser("user");
  };

  const value = useMemo(
    () => ({ user, generateUserLoginDatas, generateUserLogoutDatas }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
