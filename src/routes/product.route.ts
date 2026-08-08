import express from "express";
import { createProduct } from "../controllers/product.controller.js";
const Router = express.Router();
Router.route("/create").post(createProduct);
export default Router;
