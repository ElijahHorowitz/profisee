import axios from 'axios';
const producturl = 'http://localhost:5000/products';
const salespersonurl = 'http://localhost:5000/salespersons';

export const fetchSalesPersons = () => axios.get(salespersonurl);
export const fetchProducts = () => axios.get(producturl);
