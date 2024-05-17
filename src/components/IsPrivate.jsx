import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedin, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  if (isLoggedin) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default IsPrivate;
