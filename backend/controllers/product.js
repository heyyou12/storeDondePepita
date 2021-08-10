const Product = require("../models/product");

const registerProduct = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.code ||
    !req.body.description
  )
    return res.status(401).send("process failed, incomplete data");

  const dataFound = await Product.findOne({ name: req.body.name });
  if (dataFound)
    return res.status(401).send("process failed, the product is already");

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    code: req.body.code,
    description: req.body.description.description,
    dbStatus: true,
  });

  const result = await product.save();
  if (!result)
    return res.status(401).send("an error occurred while registering");
  return res.status(200).send({ product });
};

const listProduct = async (req, res) => {

    const product = await Product.find();
    if(!product) return res.status(401).send("No product");
    return res.status(200).send({product})
}


module.exports = {registerProduct, listProduct};