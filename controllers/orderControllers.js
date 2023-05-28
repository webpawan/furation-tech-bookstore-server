import BookOrder from "../models/oderModel.js";

export const order = async (req, res) => {
  const dataArray = req.body;
  console.log(dataArray);
  dataArray.forEach(async (bookData) => {
    try {
      const book = new BookOrder(bookData);
      await book.save();
      res.status(200).json({ message: "ok" });
    } catch (error) {
      res.status(400).json({ message: "order api problem" });
      console.error(error);
    }
  });
};
