import './App.css';
import Homepage from './views/homepage/homepage';
// import Loginpage from './views/loginpage/loginpage';
import Registerpage from './views/registerpage/registerpage';
import Shoppage from './views/shoppage/shoppage';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route caseSensitive path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<Shoppage/>} />
        <Route path='/login' element={<Registerpage/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}
