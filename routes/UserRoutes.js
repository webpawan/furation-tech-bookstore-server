import Express from "express";
import { signin, signup } from "../controllers/userControllers.js";

const router = Express.Router();

router.post("/singup", signup);
router.post("/signin", signin);

export default router;
