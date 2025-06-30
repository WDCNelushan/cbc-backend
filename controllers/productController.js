import Product from "../models/product.js";

export async function createProduct(req, res) {
    try {
        const product = new Product(req.body);
        await product.save();
        res.json({
            message: "Product created"
        });
    } catch (error) {
        res.json({
            message: "Product not created"
        });
    }
}