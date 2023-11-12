import { Router } from "express";
import { productController } from "../controllers";

const productRouter = Router();

productRouter.get("/", productController.getAllProducts);

productRouter.get("/:id", productController.getProduct);

export { productRouter };
