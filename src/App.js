import { Route, Routes } from 'react-router-dom';
import './App.css';
import BuyNow from './Component/BuyNow/BuyNow';
import Cart from './Component/Cart/Cart';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Login from './Component/Login&Rrgister/Login/Login';
import Register from './Component/Login&Rrgister/Register/Register';

import NavbarHeader from './Component/Navbar/Navbar';
import Product from './Component/Product/Product';
import ProductShow from './Component/ProductShow/ProductShow';

function App() {
  return (
    <div className="App">
        <NavbarHeader/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/product/:id' element={<ProductShow/>}/>
          <Route path='/buynow/:id' element={<BuyNow/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

        </Routes>
    </div>
  );
}

export default App;
