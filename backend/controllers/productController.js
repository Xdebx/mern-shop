//* code ni sir */
// const Product = require('../models/product')
// //create new product

// exports.newProduct = async(req,res,next) => {

// 	// console.log(req.body);

// 	const product = await Product.create(req.body);
  
//     console.log(product)
//     console.log('from async')
// 	res.status(201).json({
// 		success:true,
// 		product 
// 	})
// }

// exports.getProducts = async (req,res,next) => {

// 	const products = await Product.find();

// 	res.status(200).json({

// 		success: true,

// 		count: products.length,

// 		products

// 	})

// }

// exports.getSingleProduct = async(req,res,next) => {

//     const product = await Product.findById(req.params.id);

//     if(!product) {

//             return res.status(404).json({
//                 success: false,
//                 message: 'Product not found'
//             })

//     }

//     res.status(200).json({
//         success: true,
//         product

//     })

// }
// exports.updateProduct = async(req,res,next) => {

// 	let product = await Product.findById(req.params.id);
// 	if(!product) {

// 	 		return res.status(404).json({

// 	 			success: false,

// 	 			message: 'Product not found'
// 	 		})

// 	 }

// 	 product = await Product.findByIdAndUpdate(req.params.id,req.body,{

// 	 	new: true,
// 	 	runValidators:true,
// 	 	useFindandModify:false

// 	 })

//      console.log(product)

// 	 return res.status(200).json({

// 	 	success:true,
// 	 	product

// 	 })

// }

// exports.deleteProduct = async(req,res,next) => {

// 	const product = await Product.findById(req.params.id);

// 	if(!product) {

// 	 		return res.status(404).json({

// 	 			success: false,

// 	 			message: 'Product not found'

// 	 		})

// 	 }

// 	 await product.remove();

// 	 res.status(200).json({

// 	 	success: true,

// 	 	message: 'Product deleted'

// 	 })

// }

//* new lesson */

const Product = require("../models/product");
const mongoose = require("mongoose");
const APIFeatures = require('../utils/apiFeatures')
const ErrorHandler = require('../utils/errorHandler')

//get all products
//** luma */
// const getProducts = async (req, res, next) => {
//   const products = await Product.find().sort({ createdAt: -1 });
//   return res.json({ success: true, count: products.length, products });
// };


//** bago */
const getProducts = async (req, res, next) => {

	const resPerPage = 4;
	const productsCount = await Product.countDocuments();

	// console.log(productsCount,req.query,Product.find())
	// console.log(Product.find())

	const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter()

	// const products = await Product.find();

	apiFeatures.pagination(resPerPage);

	const products = await apiFeatures.query;

	// console.log(products)

  setTimeout(() =>{
		res.status(200).json({
		success: true,
		// count: products.length,
		productsCount,
		products
		}) 	
	 },2000);
	// res.status(200).json({

	// 	success: true,

	// 	count: products.length,

	// 	productsCount,

	// 	products

	// })

};

//get single product
const getSingleProduct = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ success: false, message: "Invalid ID" });

  const product = await Product.findById(id);

  if (!product)
    return res.status(404).json({ success: false, message: "Not found" });

  return res.json({ success: true, product });
};

//create new product
// const newProduct = async (req, res, next) => {
//   const requiredFields = [
//     "name",
//     "price",
//     "description",
//     "ratings",
//     "images",
//     "category",
//     "seller",
//     "stock",
//     "numOfReviews",
//     "reviews",
//   ];
//   const emptyFields = requiredFields.filter((field) => !req.body[field]);

//   if (emptyFields.length)
//     return res
//       .status(400)
//       .json({ error: "Please fill all fields", emptyFields });

//   try {
//     const product = await Product.create(req.body);
//     return res.json({ success: true, product });
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
// };

//create new product
const newProduct = async (req, res, next) => {

	// console.log(req.body);
	const product = await Product.create(req.body);
	console.log(product)
	console.log('from async')
	res.status(201).json({
		success: true,
		product
	})
}



//update a product
const updateProduct = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ success: false, message: "Invalid ID" });

  const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  if (!product)
    return res.status(404).json({ success: false, message: "Not found" });

  return res.json({ success: true, product });
};

//delete a product
const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ success: false, message: "Invalid ID" });

  const product = await Product.findOneAndDelete({ _id: id });

  if (!product)
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });

  res.status(200).json({ success: true, message: "Product deleted" });
};

module.exports = {
  getProducts,
  getSingleProduct,
  newProduct,
  updateProduct,
  deleteProduct,
};
