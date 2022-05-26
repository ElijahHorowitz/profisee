import mongoose from 'mongoose';
import ProductMessage from '../models/products.js';

export const getProducts = async (req, res) =>{
    try {
        const product = await ProductMessage.find({});

        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getCommision = async (req,res)=>{
    console.log(req.params);
    const { name } = req.params;
    try {
        const product = await ProductMessage.find({ 'name': {$eq: name}});
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send({message: "help"});
    }
}

export const updateProduct = async (req,res) =>{
    const { id: _id} = req.params;
    const product = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product with that id');

    const updatedProduct = await ProductMessage.findByIdAndUpdate(_id, product, {new: true});

    res.json(updatedProduct);
}
