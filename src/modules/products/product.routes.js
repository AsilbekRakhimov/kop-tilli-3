import { Router } from "express";
import { ValidationMiddleware } from "../../middleware/validation.middleware.js";
import { createProductSchema } from "./dtos/create-product.dto.js";
import productController from "./product.controller.js";

const router = Router();

router.post("/", ValidationMiddleware(createProductSchema), productController.createProduct);


export default router