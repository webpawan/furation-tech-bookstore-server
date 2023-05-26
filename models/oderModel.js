import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    title: { type: String, trim: true, require: true },
    price: { type: String, trim: true, require: true },
  },
  { timetamps: true }
);

const order = mongoose.model("Note", noteSchema);

export default order;
