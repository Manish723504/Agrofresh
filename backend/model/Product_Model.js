import mongoose from 'mongoose'
import farmerModel from './Farmer_Model.js';

const productSchema = new mongoose.Schema({
  
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: farmerModel,
    required: true
  },
  productName: {
    type: String,
    required: true,
    maxlength: 30
  },
  productCategory: {
    type: String,
    required: true,
    maxlength: 40
  },
  productDescription: {
    type: String
  },
  productPrice: {
    type: String,
    required: true,
    maxlength: 10
  },
  productPic: {
    type: String, // store the file path or URL
    default: ''
  },
  productStatus: {
    type: String,
    default: 'available'
  }
});

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel
