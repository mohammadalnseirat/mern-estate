import express from "express";
import { signup_post } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup_post);

export default router;
