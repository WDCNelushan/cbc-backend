import express from 'express';
import { createProduct, getProduct, } from '../controllers/productController.js';

//Create product router
const productRouter = express.Router();

productRouter.get("/",getProduct);
//productRouter.get("/:name",getProductByName);
productRouter.post("/",createProduct);
//productRouter.delete("/:name",deleteProduct);    

export default productRouter;