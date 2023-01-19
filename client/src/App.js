import React from 'react';
// import './App.css';
import Home  from './views/homepage/homepage';
// import Loginpage from './views/loginpage/loginpage';
import Registerpage from './views/registerpage/registerpage';
import Shoppage from './views/shoppage/shoppage';
import Dashboardpage from './views/dashboardpage/dashboardpage';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import ContextCart from './views/ContextCart';


export default function App() {
  React.useEffect(() => {
  }, []);
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route caseSensitive path='/' element={<Home/>}/>
        {/* <Route path='/' element={<ContextCart/>} /> */}
        <Route caseSensitive path='/shop' element={<Shoppage/>} />
        <Route path='/login' element={<Registerpage/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/admin' element={<Dashboardpage/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}
