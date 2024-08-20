import { CreateError } from "../../errors/create.error.js";
import { product } from "./product.schema.js";

class ProductService {
  #_model;
  constructor() {
    this.#_model = product;
  }

  // create product
  async createOneProduct({ name, description }) {
    try {
      const data = await this.#_model.insertMany({
        name,
        description,
      });
      return data;
    } catch (error) {
      throw new CreateError("Error in service while creating product");
    }
  }
  // create product

}

export default new ProductService()
