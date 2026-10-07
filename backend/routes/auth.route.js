import express from "express";
import { syncClerkUser, getMe, logout } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
// import authUser from "../controller.js/App.jsx"

const router = express.Router();

router.post("/clerk-sync", syncClerkUser);
router.get("/me", protectRoute, getMe);
router.post("/logout", logout);

export default router;
