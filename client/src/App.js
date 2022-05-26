import './App.css';
import NavBar from './components/navbar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from './page/productpage';

import EditProduct from './page/editproductpage';
import Salesperson from './page/salespersonpage';
import CustomerPage from './page/customerpage';
import SalesPage from './page/salespage';
import NewSale from './page/newsalepage';

const App = () => {
  return (
   <Router>
     <div className='bg-stone-900 min-h-screen'>
      <div>
        <NavBar />
      </div>
    
    <Routes>
      <Route path='/product' element={<Product/>}/>
      <Route path='/editproduct' element={<EditProduct/>}/>
      <Route path='/salesperson'element={<Salesperson/>}/>
      <Route path='/customers' element={<CustomerPage/>}/>
      <Route path='/sales' element={<SalesPage/>}/>
      <Route path='/newsales' element={<NewSale/>}/>
    </Routes>
    </div>
   </Router>
  )
}

export default App;
