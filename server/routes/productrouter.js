import express from 'express';
import { getProducts, updateProduct, getCommision } from '../controllers/productcontroller.js';
const router = express.Router();

router.get('/', getProducts)
router.get('/:name', getCommision);
router.put('/:id', updateProduct);

export default router;