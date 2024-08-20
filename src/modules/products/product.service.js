import { CreateError } from "../../errors/create.error.js";
import { GetDataError } from "../../errors/get-data.error.js";
import { product } from "./product.schema.js";

class ProductService {
  #_model;
  constructor() {
    this.#_model = product;
  }

  // create product
  async createOneProduct({ name, description, count }) {
    try {
      const data = await this.#_model.insertMany({
        name,
        description,
        count
      });
      return data;
    } catch (error) {
      throw new CreateError("Error in service while creating product");
    }
  }
  // create product

  // get product
  async getAllProducts(query){
    try {
        const limitNum = query.split("count=")[1]
        const data = await this.#_model.find({count:{$gt:5}}).sort({"name.value":1}).limit(Number(limitNum));
        return data
    } catch (error) {
        throw new GetDataError("Error in controller while getting all products")
    }
  }
  // get product
}

export default new ProductService()
