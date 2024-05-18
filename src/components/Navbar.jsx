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

      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/profile">
        <button>Profile</button>
      </Link>

      {isLoggedIn ? (
        <>
          <span>Welcome {user.username}</span>
          <button onClick={logOutUser}>Logout</button>
        </>
      ) : (
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
