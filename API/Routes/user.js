import express from "express";
import { getAllusers, login, register } from "../controllers/user.js";

const router=express.Router();

//register user

router.post("/register",register)

//login user

router.post("/login",login)


//get all users

router.get("/users",getAllusers)
export default router;