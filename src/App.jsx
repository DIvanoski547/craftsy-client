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
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/products" element={<ProductListPage />} />
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
      <Footer />
    </div>
  );
}

export default App;
