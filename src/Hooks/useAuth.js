import AuthContext from "@/Context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
