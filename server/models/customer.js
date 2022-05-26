import mongoose from "mongoose";


const customerSchema = mongoose.Schema({
    fname: {type: String, required: true, dropDups: true},
    lname: {type: String, required: true, dropDups: true},
    address: {type: String, required: true},
    phone:{type: String, required: true},
    startdate: {type: String, required: true},
});

const CustomerMessage = mongoose.model('CustomerMessage', customerSchema);
export default CustomerMessage;