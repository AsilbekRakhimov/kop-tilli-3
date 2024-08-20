import { Router } from "express";
import authRouter from "../modules/auth/auth.routes.js";
import productRouter from "../modules/products/product.routes.js";

const router = Router();

router.use("/user", authRouter);
router.use("/product", productRouter);

export default router;