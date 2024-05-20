import { useState } from "react";
import productService from "../services/Product.service";

function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      description,
      price,
    };

    productService
      .createProduct(requestBody)
      .then(() => {
        setTitle("");
        setDescription("");
        setPrice("");
        props.refreshProducts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Add Product</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddProduct;
