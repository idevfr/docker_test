import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
} from "../controllers/product.controller.js";
const Router = express.Router();
Router.route("/create").post(createProduct);
Router.route("/get-all").get(getAllProduct);
Router.route("/delete/:id").post(deleteProduct);
export default Router;
