const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product");

//http://localhost:3001/api/produtc/registerProduct
router.post("/registerProduct", ProductController.registerProduct);
//http://localhost:3001/api/product/listProduct
router.get("/listProdcut", ProductController.listProduct);

module.exports = router;
