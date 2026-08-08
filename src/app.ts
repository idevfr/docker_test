import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import productRoute from "./routes/product.route.js";
app.use("/api/v1/product", productRoute);
export default app;
