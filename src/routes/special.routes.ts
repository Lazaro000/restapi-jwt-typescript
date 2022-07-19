import { special } from "./../controllers/special.controller";
import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/special",
  passport.authenticate("jwt", { session: false }),
  special
);

export default router;
