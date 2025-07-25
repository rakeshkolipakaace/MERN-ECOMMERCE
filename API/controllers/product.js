import { Product } from "../models/Product.js";

//add product

export const addProduct = async (req, res) => {
  const { title, description, price, image, category, qty } = req.body;

  try {
    let product=await Products.create({
        title,
        description,
        price,
        image,
        category,        
        qty ,
    });
    res.json({ message: "Product added successfully", product, success: true });
  } catch (error) {}
};
