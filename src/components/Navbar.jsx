import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to={"/"}>
      <img src="./logo.png" alt="logo-img" />
    </Link>
  );
}

export default Navbar;
