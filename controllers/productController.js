import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req,res)
        {
            if(!isAdmin(req)){
                res.json({
                    message : "Please login as administrator to add products"
                })

                return 
            }

            const newProductData = req.body;

            const product = new Product(newProductData);
    
            product.save().then(
                ()=>{
                    res.json({
                         message : "product created"
                    })
                }
            ).catch((error)=>
            {
                res.json({
                    message : error
            })
            }
            )
     }

export function getProduct(req,res)
    {
        Product.find({}).then(
        (products)=>{
            res.json(products)
        }
       )
    }

    /*export function deleteProduct(req,res){
        Product.deleteOne({name:req.params.name}).then(
            ()=>{
                res.json ({
                    message : "Product deleted successfully"
                })
            }
        )
    }

export function getProductByName(req,res){
    
    const name = req.params.name;
    Product.find({name:name}).then(
        (productList)=>{
           if(productList.length == 0){
            res.json({
                message : "Product not found"
            })
           }else{
            res.json({
                list : productList
            })
           }
        }
    ).catch(()=>{
        res.json({
            message : "Error"
        })
    })
}*/