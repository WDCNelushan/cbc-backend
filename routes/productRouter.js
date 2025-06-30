import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductByName } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProduct);
productRouter.delete("/",deleteProduct);
productRouter.get("/byName",getProductByName);

export default productRouter;
