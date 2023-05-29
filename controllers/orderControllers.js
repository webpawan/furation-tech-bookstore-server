import Order from "../models/oderModel.js";

export const placeOrder = async (req, res) => {
  const { name, email, phone, address, books } = req.body;

  try {
    const order = new Order({
      name,
      email,
      phone,
      address,
      books,
    });

    await order.save();

    res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error placing order" });
  }
};
