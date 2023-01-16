import '../views/homepage/homepage.css';
import './header.css'
import React from 'react'
// import {ReactNavbar} from 'overlay-navbar';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container">
      <a className="navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="index.html">
        <img src="logo.png" alt="site icon" />
        <span className="text-uppercase fw-lighter mx-5">LA's Closet</span>
      </a>
      <div className="order-lg-2 nav-btns">
        <button type="button" className="btn position-relative">
          <i className="fa fa-shopping-cart" />
          {/* <span class = "position-absolute top-0 start-100 translate-middle badge bg-primary">5</span> */}
        </button>
        <button type="button" className="btn position-relative">
          <i className="fa fa-heart" />
          {/* <span class = "position-absolute top-0 start-100 translate-middle badge bg-primary">2</span> */}
        </button>
        <button type="button" className="btn position-relative">
          <i className="fa fa-search" />
        </button>
      </div>
      <button className="navbar-toggler border-1 border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse order-lg-1" id="navMenu">
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item px-2 py-2">
            <a className="nav-link text-uppercase text-dark" href="#header">home</a>
          </li>
          <li className="nav-item px-2 py-2">
            <a className="nav-link text-uppercase text-dark" href="#collection">collection</a>
          </li>
          <li className="nav-item px-2 py-2">
            <a className="nav-link text-uppercase text-dark" href="#special">specials</a>
          </li>
          <li className="nav-item px-2 py-2">
            <a className="nav-link text-uppercase text-dark" href="#blogs">blogs</a>
          </li>
          <li className="nav-item px-2 py-2">
            <a className="nav-link text-uppercase text-dark" href="#about">about us</a>
          </li>
          <li className="nav-item px-2 py-2 border-0">
            <a className="nav-link text-uppercase text-dark" href="#popular">popular</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    // <ReactNavbar
    
    // />
//     <header class="container">
//     <div class="navbar">
//             <div class="logo">
//                 <img src="logo.png" alt="logo"/>
//             </div>
//             <div class="header">
//                 <nav>
//                 <ul>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#product">Product</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#contact-us">Contact us </a></li>
//                     <li><a href="#cart"><img src="icon.png" alt="" height="30px" width="30px"/></a></li>
//                 </ul>
//             </nav>
//             </div>

//     </div>
//     <div class="box">
//         <div class="box1">
//             <h1>Welcome to LA's Closet</h1> <br/>
//             <h2> A FASHION DESTINATION </h2> <br/>
//             <p>
//                 <b>Pick from our wide range of fashion products<br/>
//                 Check out our items in the products section</b> 
//             </p>
//             <a href="" class="btn">Explore Now &#10132</a>
//         </div>
//     </div>
// </header>
  )
}

export default Header;
