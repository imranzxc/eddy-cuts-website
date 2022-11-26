import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productImage: String,
  inCart: {
    type: Boolean,
    default: false,
  },
  inFavorite: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Product", ProductSchema);
