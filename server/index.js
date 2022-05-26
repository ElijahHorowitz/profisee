import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import productRoutes from './routes/productrouter.js';
import salesPersonRoutes from './routes/salepersonrouter.js';
import customerRoutes from './routes/customerrouter.js';
import salesRoutes from './routes/salesrouter.js';
const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/products', productRoutes);
app.use('/salespersons', salesPersonRoutes);
app.use('/customers',customerRoutes);
app.use('/sales', salesRoutes);

const CONNECTION_URL = 'mongodb+srv://eli:cTAYIWG1rPhdZJjr@cluster0.va8kwwx.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
 
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
