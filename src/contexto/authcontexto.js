import { createContext } from "react";
import useSessionStorage from "../hook/useSessionStorage";

export const AuthContexto = createContext(null);

const AuthProvider = ({ children }) => {

  const { gravarToken, accessToken } = useSessionStorage();

  return (
    <AuthContexto.Provider value={{ gravarToken, accessToken }}>
      { children }
    </AuthContexto.Provider>
  )

}

export default AuthProvider;