import Product from "../models/product.js";

export function getProduct(req,res)
    {
        Product.find().then(
        (productList)=>{
            res.json({
                list : productList
            })
        }
       )
    }

export function createProduct(req,res)
        {
            console.log(req.user);

            if(req.user == null){
                res.json({
                    message : "You are not logged in"
                })
                return
            }

            if(req.user.type != "admin"){
                res.json({
                    message : "You are not an admin"
                })
                return
            }

            const product = new Product(req.body);
    
            product.save().then(
                ()=>{
                    res.json({
                         message : "product created"
                    })
                }
            ).catch(()=>
            {
                res.json({
                    message : "product not created"
            })
            }
            )
     }

export function deleteProduct(req,res){
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
}