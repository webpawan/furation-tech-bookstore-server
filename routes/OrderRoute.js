import Express from "express";
import { placeOrder } from "../controllers/orderControllers.js";

const router = Express.Router();

router.post("/order", placeOrder);

export default router;
