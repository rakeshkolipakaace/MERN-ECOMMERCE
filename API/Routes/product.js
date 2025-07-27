import express from "express";
import { addProduct, getProduct } from "../controllers/product.js";

const router = express.Router();

//add product
router.post("/add", addProduct);

//add product
router.get("/all", getProduct);

export default router;
