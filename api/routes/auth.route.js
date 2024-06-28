import express from "express";
import { signin_post, signup_post } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup_post);
router.post ('/signin', signin_post);

export default router;
