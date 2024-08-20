import { Router } from "express";
import { ValidationMiddleware } from "../../middleware/validation.middleware.js";
import { signUpUserSchema } from "./dtos/signUp.dto.js";
import authController from "./auth.controller.js";
import { signInUserSchema } from "./dtos/signIn.dto.js";

const router = Router();

router.post("/sign-up", ValidationMiddleware(signUpUserSchema), authController.signUp);
router.post("/sign-in", ValidationMiddleware(signInUserSchema), authController.signin);

export default router;