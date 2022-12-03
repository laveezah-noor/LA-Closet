import ProductModel from '../models/productModel';


export async function createProduct(req, res, next) {
    // const product = await ProductModel.create(req.body);
    await ProductModel.create(req.body,
        );

}

export async function getAllProducts(req, res) {  
    res.status(200).json({
        "message": "All products"
    })
}