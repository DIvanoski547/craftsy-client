import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Button, Layout, Menu } from "antd";
const { Header } = Layout;

function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const menuItems = [
    {
      key: "1",
      label: "Home",
      link: "/",
    },
    {
      key: "2",
      label: "Products",
      link: "/products",
    },
    {
      key: "3",
      label: "About",
      link: "/about",
    },
    {
      key: "4",
      label: "Signup",
      link: "/signup",
    },
    {
      key: "5",
      label: "Login",
      link: "/login",
    },
  ];

  const filteredMenuItems = isLoggedIn
    ? menuItems.filter((item) => item.key !== "4" && item.key !== "5")
    : menuItems;

  const items = filteredMenuItems.map((item) => ({
    ket: item.key,
    label: <Link to={item.link}>{item.label}</Link>,
  }));

  return (
    <div>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        {isLoggedIn && <Button type="primary" onClick={logOutUser}>Logout</Button>}
      </Header>
    </div>
  );
}

export default Navbar;
