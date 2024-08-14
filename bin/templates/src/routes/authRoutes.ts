import express, { Router } from "express";
import { getMe, login, logout, signup } from "../controllers/authController";
import { protectRoute } from "../middlewares/protectRoute";

const router: Router = express.Router();

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
