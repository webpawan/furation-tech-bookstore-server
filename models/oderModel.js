import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  isbn13: String,
  price: String,
  image: String,
  url: String,
});

const BookOrder = mongoose.model("Book", bookSchema);

export default BookOrder;
