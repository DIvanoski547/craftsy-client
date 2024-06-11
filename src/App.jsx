import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import ProfilePage from "./pages/ProfilePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductEditPage from "./pages/ProductEditPage";
import AboutPage from "./pages/AboutPage";
import AntFooter from "./components/AntFooter";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '64px' }}>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/products" element={<ProductListPage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route
              exact
              path="/products/:productId"
              element={<ProductDetailsPage />}
            />
            <Route
              exact
              path="/products/edit/:productId"
              element={
                <IsPrivate>
                  <ProductEditPage />
                </IsPrivate>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <IsAnon>
                  <LoginPage />
                </IsAnon>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <IsAnon>
                  <SignupPage />
                </IsAnon>
              }
            />
          </Routes>
        </Content>
        <Footer className="layoutFooter">
          <AntFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
