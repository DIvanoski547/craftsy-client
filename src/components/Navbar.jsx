import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Menu } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

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
      label: "Gallery",
      link: "/gallery",
    },
    {
      key: "4",
      label: "About",
      link: "/about",
    },
    {
      key: "6",
      label: <UserOutlined />,
      link: isLoggedIn ? "/" : "/login",
      onClick: isLoggedIn ? logOutUser : null,
      style: { marginLeft: "auto" },
    },
    {
      key: "5",
      label: <ShoppingCartOutlined />,
      link: "/shoppingcart",
    }
  ];

  const items = menuItems.map((item) => ({
    key: item.key,
    label: item.onClick ? (
      <span style={{ cursor: "pointer" }} onClick={item.onClick}>
        {item.label}
      </span>
    ) : (
      <Link to={item.link}>{item.label}</Link>
    ),
    style: item.style || {},
  }));

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </div>
  );
}

export default Navbar;
