import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsService from "../services/Product.service";

function ProductDetailsPage() {
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
        <h1>Product Details Page</h1>
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;
