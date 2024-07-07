import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser, removeUser] = useLocalStorage("user");

  const generateUserLoginDatas = (userData) => {
    setUser(userData);
    navigate("/");
  };

  const generateUserLogoutDatas = () => {
    removeUser("user");
    navigate("/");
  };

  const value = useMemo(
    () => ({ user, generateUserLoginDatas, generateUserLogoutDatas }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
