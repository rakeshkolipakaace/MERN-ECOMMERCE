import { Product } from "../models/Product.js";

//add product

export const addProduct = async (req, res) => {
  const { title, description, price, image, category, qty } = req.body;

  try {
    let product = await Product.create({
      title,
      description,
      price,
      image,
      category,
      qty,
    });
    res.json({ message: "Product added successfully", product, success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//get products.............

export const getProduct = async (req, res) => {
  let products = await products.find().sort({ createdAt: -1 });
  res.json({ message: "All Products", products });
};
