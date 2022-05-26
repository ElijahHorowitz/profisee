import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    name: {type: String, required: true, dropDups: true},
    manufacturer: {type: String, required: true},
    style: {type: String, required: true},
    purchasePrice:{type: Number, required: true},
    salePrice: {type: Number, required: true},
    quantity: {type: Number, required: true},
    commisionPercentage: {type: Number, required: true}
});

const ProductMessage = mongoose.model('ProductMessage', productSchema);

export default ProductMessage;