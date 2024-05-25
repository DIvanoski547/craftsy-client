import axios from "axios";

class ProductsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers.Authorization = `Bearer ${storedToken}`;
      }
      return config;
    });
  }

  createProduct = async (requestBody) => {
    try {
      return await this.api.post("/api/products", requestBody, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error creating product", error);
      throw error;
    }
  };

  getAllProducts = async () => {
    try {
      return await this.api.get("/api/products");
    } catch (error) {
      console.error("Error fetching all products", error);
      throw error;
    }
  };

  getProduct = async (id) => {
    try {
      return await this.api.get(`/api/products/${id}`);
    } catch (error) {
      console.error(`Error fetching product with id ${id}`, error);
      throw error;
    }
  };

  updateProduct = async (id, requestBody) => {
    try {
      return await this.api.put(`/api/products/${id}`, requestBody, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(`Error updating product with id ${id}`, error);
      throw error;
    }
  };

  deleteProduct = async (id) => {
    try {
      return await this.api.delete(`/api/products/${id}`);
    } catch (error) {
      console.error(`Error deleting product with id ${id}`, error);
      throw error;
    }
  };
}

const productsService = new ProductsService();

export default productsService;
