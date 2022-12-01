import './homepage.css'
import PropTypes from 'prop-types'
import React from 'react'
// import { connect } from 'react-redux'

const homepage = (props) => {
  return (
    <div>homepage
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

{/* <!-- Benefits --> */}
<div class="Benefits">
    <h1>Why Shop With Us ?</h1> <br/>
    <div class="row">
        <div class="col">
            <ul>
                <li>
                    <img src="truck.gif" alt="" height="50px" width="50px"/>
                    <h3>Fast Delivery</h3> <br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, impedit!</p>    
                </li>
                <li>
                    <img src="shipping.gif" alt="" height="50px" width="50px"/>
                    <h3>Free Shipping</h3> <br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, impedit!</p>    
                </li>
                <li>
                    <img src="medal-.gif" alt="" height="50px" width="50px"/>
                    <h3>Best Quality</h3> <br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, impedit!</p>    
                </li>
            </ul>
        </div>
    </div>
</div>

{/* <!-- Categories --> */}
<div class="category">
    <h1>CATEGORIES</h1>
    <div class="category1">
        <h2>MEN</h2>
    </div>
    <div class="category1">
        <h2>WOMEN</h2>
    </div>
    <div class="category1">
        <h2>KID</h2>
    </div>
</div>
<footer>  
    <div class="footer0">  
      <h1>LA's CLOSET</h1>  
    </div>  
    <div class="footer2">  
      <div class="product">  
        <div class="heading">Products</div>    
        <div class="div">Advertise</div>  
        <div class="div">Pricing</div>  
        <div class="div">Product Buisness</div>  
      </div>  
      <div class="services">  
        <div class="heading">Services</div>  
        <div class="div">Return</div>  
        <div class="div">Cash Back</div>  
        <div class="div">Others</div>  
      </div>  
      <div class="Get Help">  
        <div class="heading">Get Help</div>  
        <div class="div">Help Center</div>  
        <div class="div">Privacy Policy</div>  
        <div class="div">Terms</div>  
      </div>  
    </div>  
    <div class="footer3">Copyright © <h4>La's Closet</h4> 2021-2028</div>  
  </footer>  
  </div>
  )
}

// homepage.propTypes = {
//   second: PropTypes.third
// }

export default homepage;

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(homepage)