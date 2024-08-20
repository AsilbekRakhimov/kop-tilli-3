import productService from "./product.service.js";

class ProductController {
  #_service;
  constructor() {
    this.#_service = productService;
  }

  // create product
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
  // create product

//   get products
  getProducts = async (req, res) => {
    try {
        const query = req.url.split("/?")[1]
        const data = await this.#_service.getAllProducts(query);
        res.status(200).send({
            data:data,
            message:"All products"
        })
    } catch (error) {
        res.status(409).send({
            name:error.name,
            message:error.message + " in controller"
        })
    }
  }

//   get products
}

export default new ProductController();
