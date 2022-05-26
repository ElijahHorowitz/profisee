import mongoose from "mongoose";


const salesPersonSchema = mongoose.Schema({
    fname: {type: String, required: true, dropDups: true},
    lname: {type: String, required: true, dropDups: true},
    address: {type: String, required: true},
    phone:{type: String, required: true},
    startdate: {type: String, required: true},
    terminationdate: {type: String, required: true},
    manager: {type: String, required: true}
});

const SalesPersonMessage = mongoose.model('SalePersonMessage', salesPersonSchema);

export default SalesPersonMessage;