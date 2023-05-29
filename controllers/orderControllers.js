import BookOrder from "../models/oderModel.js";

export const order = async (req, res) => {
  const dataArray = req.body;
  dataArray.forEach(async (bookData) => {
    try {
      const book = new BookOrder(bookData);
      await book.save();
      return res.status(200).json({ message: "ok" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "order api problem" });
    }
  });
};
