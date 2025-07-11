import Product from "../models/product.js";
import { isAdmin } from "./userController.js";


export async function createProduct(req, res) {

    if(!isAdmin(req)){
        res.json({
            message : "Please login as administrator to add products"
        })
    }
    
    try {
        const product = new Product(req.body);
        await product.save();
        res.json({
            message: "Product created"
        });
    } catch (error) {
        res.json({
            message: "Product not created",
            error: error.message
        });
    }
}

export async function getProduct(req,res){
    try{
        const productList = await Product.find()
        res.json({
            list : productList
        })
    } catch (error){
        res.json({
            message : "Can not get products",
            error: error.message
        })
    }
}

export async function deleteProduct(req,res){
    try{
        await Product.deleteOne({name : req.params.name})
        res.json({
            message : "Product deleted successfully"
        })
    } catch (error){
        res.json({
            message : "Product not deleted",
            error : error.message
        })
    }
}

export async function getProductByName(req, res) {
    try {
        const name = req.params.name;
        const productList = await Product.find({ name: name });

        if (productList.length === 0) {
            res.json({
                message: "Product not found"
            });
        } else {
            res.json({
                list: productList
            });
        }
    } catch (error) {
        res.json({
            message: "Error",
            error: error.message 
        });
    }
}