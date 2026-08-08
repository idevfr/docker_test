import { model, Schema, type Document } from "mongoose";

interface IProduct extends Document {
  title: string;
  price: number;
}
const productSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export const Product = model("Product", productSchema);
