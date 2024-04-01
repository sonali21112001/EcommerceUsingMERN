const Product = require("../models/productmodel");

//create Product --Admin
exports.createProduct = async (req, res, next) => {

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
}

//get All Products
exports.getAllProducts = async (req, res) => {

  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
}

//get ProductDetails
exports.getProductDetails = async (req,res,next)=>{

  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product not Found"
    })
  }

  res.status(200).json({
    success: true,
    product,
    message:"getProductDetails"
  });

}

// Update Product --Admin
exports.updateProduct = async (req, res, next) => {

  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product not Found"
    })
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
     usefindAndModify: false
  });
  res.status(200).json({
    success: true,
    product,
  });

}

exports.deleteProduct = async (req, res, next) => {

  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product not Found"
    })
  }
  // await product.remove
  product = await Product.findByIdAndDelete(req.params.id, req.body, {
    new: true,
    runValidators: true,
     usefindAndModify: false
  });
  
  res.status(200).json({
    success: true,
   
    message:"Product Delete Successfully"
  });

}


