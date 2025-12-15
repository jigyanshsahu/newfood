import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';
import Footer from "./components/Footer/Footer";

import Loginpopup from './components/Loginpopup/Loginpopup';
import Verify from './pages/verify/verify';
import Myorders from './pages/myorder/Myorders';

const App = () => {
  const [showlogin, setShowlogin] = useState(false);

  return (
    <>
      {showlogin && <Loginpopup setShowlogin={setShowlogin} />}
      
      <div className='app'>
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Order' element={<Placeorder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/Myorder' element={<Myorders />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
