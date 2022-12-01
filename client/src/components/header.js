import '../views/homepage/homepage.css';
import React from 'react'

const Header = () => {
  return (
    <header class="container">
    <div class="navbar">
            <div class="logo">
                <img src="logo.png" alt="logo"/>
            </div>
            <div class="header">
                <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact-us">Contact us </a></li>
                    <li><a href="#cart"><img src="icon.png" alt="" height="30px" width="30px"/></a></li>
                </ul>
            </nav>
            </div>

    </div>
    <div class="box">
        <div class="box1">
            <h1>Welcome to LA's Closet</h1> <br/>
            <h2> A FASHION DESTINATION </h2> <br/>
            <p>
                <b>Pick from our wide range of fashion products<br/>
                Check out our items in the products section</b> 
            </p>
            <a href="" class="btn">Explore Now &#10132</a>
        </div>
    </div>
</header>
  )
}

export default Header;
