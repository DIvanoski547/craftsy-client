import { useContext, useEffect, useState } from "react";
import productsService from "../services/Product.service";
import AddProduct from "../components/AddProduct";
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../context/auth.context";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);

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

  return (
    <div>
      <h1>Product List Page</h1>

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
    </div>
  );
}

export default ProductListPage;
