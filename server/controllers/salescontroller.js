import SalesMessage from '../models/sales.js';

export const getSales = async (req, res) =>{
    try {
        const sale = await SalesMessage.find({});

        res.status(200).json(sale);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createSales = async (req, res) =>{
    try {
        const sale = new SalesMessage(req.body);
        await sale.save();
        res.json(sale).status(201).send()
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}