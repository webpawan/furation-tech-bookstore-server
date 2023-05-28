import Express from "express";
import { order } from "../controllers/orderControllers.js";

const router = Express.Router();

router.post("/order", order);

export default router;
