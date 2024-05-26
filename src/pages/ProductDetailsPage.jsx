import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import productsService from "../services/Product.service";
import { AuthContext } from "../context/auth.context";

function ProductDetailsPage() {
  const { isLoggedIn } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = () => {
      setLoading(true);
      productsService
        .getProduct(productId)
        .then((response) => {
          setProduct(response.data);
          setError(null);
          console.log(response.data);
        })
        .catch((error) => {
          setError("Error fetching product details");
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {product && (
        <>
          <img
            src={product.imageUrl}
            alt={`${product.title} image`}
            style={{ width: 200 }}
          />
          <h1>{product.title}</h1>
          <p>Description: {product.description}</p>
          <p>Price: {product.price} €</p>
          <p>Category: {product.category}</p>
        </>
      )}

      {isLoggedIn && (
        <>
          <Link to={`/products/edit/${productId}`}>
            <button>Edit Product</button>
          </Link>
        </>
      )}
      <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
