import express from "express";
import Product from "../models/productModal.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get('/',async(req,res) => {
   await Product.remove({});
   const createdProducts = await Product.insertMany(data.products);//return all records into Product model
   res.send({createdProducts});
});

export default seedRouter;