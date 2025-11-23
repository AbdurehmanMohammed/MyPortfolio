import express from "express";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/auth/signup").post(authCtrl.signup); // ADD SIGNUP
router.route("/auth/signin").post(authCtrl.signin);
router.route("/auth/signout").get(authCtrl.signout);
router.route("/auth/current-user").get(authCtrl.requireSignin, authCtrl.getCurrentUser); // ADD CURRENT USER

export default router;