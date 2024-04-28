import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <Link to={"/"}>
      <img src="./logo.png" alt="logo-img" className="img" />
    </Link>
    <Link to={"/login"}>
      Login    </Link>
    </>
  );
}

export default Navbar;
