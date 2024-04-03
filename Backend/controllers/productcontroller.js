const Product = require("../models/productmodel");
const ErrorHander = require("../utils/ErrorHander");
const catchasyncError = require("../middleware/catchasyncError");
const ApiFeatures = require("../utils/apifeature");

//create Product --Admin
exports.createProduct = catchasyncError(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

//get All Products
exports.getAllProducts = catchasyncError(async (req, res) => {

  const resultPerPage = 4;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(),req.query)
  .search()
  .filter()
  .pagination(resultPerPage);
  const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    
  });
});

//get ProductDetails
exports.getProductDetails = catchasyncError( async (req,res,next)=>{

  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product just not found",404))
  }

  res.status(200).json({
    success: true,
    product,
    message:"getProductDetails",
    productCount,
  });

});

// Update Product --Admin
exports.updateProduct = catchasyncError (async (req, res, next) => {

  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product just not found",404))
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

});

exports.deleteProduct = catchasyncError(async (req, res, next) => {

  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product just not found",404))
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

});


