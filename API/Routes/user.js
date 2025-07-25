import express from "express";
import { login, register } from "../controllers/user.js";

const router=express.Router();

//register user

router.post("/register",register)

//login user

router.post("/login",login)


//get all users
export default router;