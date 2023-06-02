import { mongoose } from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  parentId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category"
  }
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
