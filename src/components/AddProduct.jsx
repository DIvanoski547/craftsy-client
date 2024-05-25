import { useState } from "react";
import productService from "../services/Product.service";

function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !price || !category || !image) {
      alert("All fields are required!");
      return;
    }

    const requestBody = new FormData();
    requestBody.append("title", title);
    requestBody.append("description", description);
    requestBody.append("price", price);
    requestBody.append("category", category);
    requestBody.append("imageUrl", image);

    productService
      .createProduct(requestBody)
      .then(() => {
        setTitle("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImage(null);
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
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="household">Household</option>
          <option value="kitchen">Kitchen</option>
          <option value="car">Car</option>
          <option value="personal">Personal</option>
          <option value="engraved">Engraved</option>
        </select>
        <label>Image:</label>
        <input
          type="file"
          name="imageUrl"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
