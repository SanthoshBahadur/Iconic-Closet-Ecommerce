import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// register and the method will be post
router.post("/register", registerController);

//  login and the method will be post
router.post("/login", loginController);

// forgot password
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

// protected User routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: "true",
  });
});

// protected Admin routes
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: "true",
  });
});

export default router;
