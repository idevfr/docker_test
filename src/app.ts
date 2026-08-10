import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("docker is kinda cool !");
});
import productRoute from "./routes/product.route.js";
app.use("/api/v1/product", productRoute);
export default app;
