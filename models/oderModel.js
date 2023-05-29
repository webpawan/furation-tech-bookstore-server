import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  isbn13: String,
  price: String,
  image: String,
  url: String,
});

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  books: [bookSchema],
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
