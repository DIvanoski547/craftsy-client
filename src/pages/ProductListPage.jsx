import React, { useContext, useEffect, useState } from "react";
import productsService from "../services/Product.service";
import AddProduct from "../components/AddProduct";
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { Button, Layout, Menu, Spin, Alert } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // Menu items
  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    }
  );

  const getAllProducts = () => {
    productsService
      .getAllProducts()
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Layout style={{ paddingBottom: "25px" }}>
          <Sider style={{}} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
              backgroundColor: "lightgrey",
              display: "flex",
              flexWrap: "wrap",
              gap: "small",
            }}
          >
            {isLoggedIn && (
              <>
                <AddProduct refreshProducts={getAllProducts} />
              </>
            )}

            {loading && <p>Loading products...</p>}

            {error && <p>{error}</p>}

            {!loading &&
              !error &&
              products.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default ProductListPage;
