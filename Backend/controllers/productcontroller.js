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
exports.getAllProducts = (req, res) => {

    res.status(200).json({ message: "route is working fine" });
}