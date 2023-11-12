import { Request, Response } from "express";
import db from "../db";

const PRODUCTS = db.products;

class ProductController {
  getAllProducts(req: Request, res: Response): void {
    const limit = Number(req.query.limit) || 5;
    const page = Number(req.query.page) || 1;

    const currentProducts = PRODUCTS.slice((page - 1) * limit, page * limit);
    try {
      res.status(200).json(currentProducts);
    } catch (error) {
      res.status(404);
    }
  }

  getProduct(req: Request, res: Response): void {
    const id = req.params.id;
    const currentProduct = PRODUCTS.find(
      (product) => product.id === Number(id)
    );
    if (currentProduct) {
      res.status(200).json(currentProduct);
    } else {
      res.status(404).json({ message: "Товар не найден" });
    }
  }
}

const productController = new ProductController();

export { productController };
