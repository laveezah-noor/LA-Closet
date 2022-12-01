import './homepage.css'
import PropTypes from 'prop-types'
import React from 'react'
// import { connect } from 'react-redux'

const homepage = (props) => {
  return (
    <div>


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