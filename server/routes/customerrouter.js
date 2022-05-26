import express from 'express';
import { getCustomer } from '../controllers/customercontroller.js';
const router = express.Router();

router.get('/', getCustomer)


export default router;