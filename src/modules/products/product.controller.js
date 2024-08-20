import productService from "./product.service.js";

class ProductController {
  #_service;
  constructor() {
    this.#_service = productService;
  }

  createProduct = async (req, res) => {
    try {
      const data = await this.#_service.createOneProduct(req.body);
      res.status(201).send({
        data: data,
        message: "Created succesfully",
      });
    } catch (error) {
      res.status(400).send({
        name: error.name,
        message: error.message + " in controller",
      });
    }
  };
}

export default new ProductController()