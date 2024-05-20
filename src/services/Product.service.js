import axios from "axios";

class ProductsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  createProduct = (requestBody) => {
    return this.api.post("/api/products", requestBody);
  };

  getAllProducts = () => {
    return this.api.get("/api/products");
  };

  getProduct = (id) => {
    return this.api.get(`/api/products/${id}`);
  };

  updateProduct = (id, requestBody) => {
    return this.api.put(`/api/products/${id}`, requestBody);
  };

  deleteProduct = (id) => {
    return this.api.delete(`/api/products/${id}`);
  };
}

const productsService = new ProductsService();

export default productsService;
