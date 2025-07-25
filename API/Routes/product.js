import express from "express";
import { addProduct } from "../controllers/product.js";

const router = express.Router();

//add product
router.post("/add", addProduct);

export default router;
