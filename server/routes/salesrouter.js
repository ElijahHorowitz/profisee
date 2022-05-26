import express from 'express';
import { getSales, createSales } from '../controllers/salescontroller.js';
const router = express.Router();

router.get('/', getSales)
router.post('/',createSales)


export default router;