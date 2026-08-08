import type { RequestHandler } from "express";
import { Product } from "../models/product.model.js";

export const createProduct: RequestHandler = async function (req, res) {
  try {
    const { title, price } = req.body;
    if (!title || !price) {
      throw new Error("required fields are missing");
    }
    const product = await Product.create({ title, price });
    if (!product) {
      throw new Error("failed creating product");
    }
    return res.status(200).json(product);
  } catch (error) {
    throw error;
  }
};
