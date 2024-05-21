import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsService from "../services/Product.service";
import { AuthContext } from "../context/auth.context";

function ProductDetailsPage() {
  const {isLoggedIn} = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const getProduct = () => {
    productsService
      .getProduct(productId)
      .then((response) => {
        const oneProduct = response.data;
        setProduct(oneProduct);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <div>
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price} €</p>
        </>
      )}

      {isLoggedIn && (
        <>
        <Link to={`/products/edit/${productId}`}>
        <button>Edit Product</button>
      </Link>
        </>
      )}
      
    </div>
  );
}

export default ProductDetailsPage;
