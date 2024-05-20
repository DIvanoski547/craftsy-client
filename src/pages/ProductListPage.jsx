import { useEffect, useState } from "react";
import productsService from "../services/Product.service";
import AddProduct from "../components/AddProduct";
import ProductCard from "../components/ProductCard";


function ProductListPage() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    productsService
      .getAllProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Product List Page</h1>
      <AddProduct refreshProducts={getAllProducts} />

      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}

export default ProductListPage;
