import express from 'express';
import { getSalesPerson, updateSalesPerson } from '../controllers/salespersoncontroller.js';
const router = express.Router();

router.get('/', getSalesPerson)
router.patch('/id', updateSalesPerson);

export default router;