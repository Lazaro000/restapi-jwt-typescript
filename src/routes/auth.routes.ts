import { signUp, signIn } from "./../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
