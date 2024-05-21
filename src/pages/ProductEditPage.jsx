import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsService from "../services/Product.service";

function ProductEditPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    productsService
      .getProduct(productId)
      .then((response) => {
        const oneProduct = response.data;
        setTitle(oneProduct.title);
        setDescription(oneProduct.description);
        setPrice(oneProduct.price);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, price };

    productsService.updateProduct(productId, requestBody).then(() => {
      navigate(`/product/${productId}`);
    });
  };

  const deleteProduct = () => {
    productsService
      .deleteProduct(productId)
      .then(() => {
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Product</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Submit changes</button>
      </form>
      <button onClick={deleteProduct}>Delete product</button>
    </div>
  );
}

export default ProductEditPage;
