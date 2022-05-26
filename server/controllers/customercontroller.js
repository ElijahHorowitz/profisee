import CustomerMessage from '../models/customer.js';

export const getCustomer = async (req, res) =>{
    try {
        const person = await CustomerMessage.find({});

        res.status(200).json(person);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}