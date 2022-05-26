import SalePersonMessage from '../models/salespersons.js';

export const getSalesPerson = async (req, res) =>{
    try {
        const person = await SalePersonMessage.find({});

        res.status(200).json(person);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateSalesPerson = async (req,res) =>{
    const {id} = req.params;
    const person = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Person with that Id');

    const updatedProduct = await SalePersonMessage.findByIdAndUpdate(_id, person, {new: true});

    res.json(updatedProduct)
}