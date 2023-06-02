import { mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Products = mongoose.model("Product", productSchema);
export default Products;
