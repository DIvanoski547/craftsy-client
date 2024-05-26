import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Button } from "antd";

function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to={"/"}>
        <img src="./logo.png" alt="logo-img" className="img" />
      </Link>

      <Link to="/">
        <Button>Home</Button>
      </Link>

      <Link to="/products">
        <Button>Products</Button>
      </Link>

      <Link to="/about">
        <Button>About</Button>
      </Link>

      {isLoggedIn ? (
        <>
          <Link to="/profile">
            <Button>Profile</Button>
          </Link>
          <Button onClick={logOutUser}>Logout</Button>
        </>
      ) : (
        <>
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
