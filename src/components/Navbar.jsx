import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to={"/"}>
        <img src="./logo.png" alt="logo-img" className="img" />
      </Link>

      {/* LOGGED IN USER */}
      {isLoggedIn && (
        <>
          <span>Welcome {user.username}</span>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {/* LOGGED OUT USER */}
      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
