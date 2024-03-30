const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productcontroller");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);


module.exports = router