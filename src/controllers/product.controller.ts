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
export const getAllProduct: RequestHandler = async function (req, res) {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    throw error;
  }
};
export const deleteProduct: RequestHandler = async function (req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      throw new Error("id is missing");
    }
    const deletedProduct = await Product.deleteOne({ _id: id });
    return res.status(200).json({});
  } catch (error) {
    throw error;
  }
};
