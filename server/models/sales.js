import mongoose from "mongoose";


const salesSchema = mongoose.Schema({
    product: {type: String, required: true},
    salesPerson: {type: String, required: true},
    customer: {type: String, required: true},
    saleDate: {type: String, required: true},
});

const SalesMessage = mongoose.model('SalesMessage', salesSchema);

export default SalesMessage;