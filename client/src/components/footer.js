import '../views/homepage/homepage.css';
import React from 'react'

const Footer2 = () => {
  return (
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
  )
}

const Footer = () => {
  return(
    <footer id="footer" className="home bg-dark py-5">
                    <div className="container">
                      <div className="row text-white g-4">
                        <div className="col-md-6 col-lg-3">
                          <a className="text-uppercase text-decoration-none brand text-white" href="index.html">
                          LA's Closet</a>
                          <p className="text-white text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nostrum mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit dolor ipsam?</p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <h5 className="fw-light">Links</h5>
                          <ul className="list-unstyled">
                            <li className="my-3">
                              <a href="#" className="text-white text-decoration-none text-muted">
                                <i className="fas fa-chevron-right me-1" /> Home
                              </a>
                            </li>
                            <li className="my-3">
                              <a href="#" className="text-white text-decoration-none text-muted">
                                <i className="fas fa-chevron-right me-1" /> Collection
                              </a>
                            </li>
                            <li className="my-3">
                              <a href="#" className="text-white text-decoration-none text-muted">
                                <i className="fas fa-chevron-right me-1" /> Blogs
                              </a>
                            </li>
                            <li className="my-3">
                              <a href="#" className="text-white text-decoration-none text-muted">
                                <i className="fas fa-chevron-right me-1" /> About Us
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <h5 className="fw-light mb-3">Contact Us</h5>
                          {/* <div class="d-flex justify-content-start align-items-start my-2 text-muted">
                                  <span class="me-3">
                                      <i class="fas fa-map-marked-alt"></i>
                                  </span>
                                  <span class="fw-light">
                                      Albert Street, New York, AS 756, United States of America
                                  </span>
                              </div> */}
                          <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <span id="gmail" className="me-3">
                              <i className="fas fa-envelope" />
                            </span>
                            <a role="button" className="fw-light text-decoration-none text-secondary">
                              sohailahmed.24j01@gmail.com
                            </a>
                          </div>
                          <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <span id="phone" className="me-3">
                              <i className="fas fa-phone" />
                            </span>
                            <span className="fw-light">
                              +92 3343701098
                            </span>
                          </div>
                          {/* <h5 class="fw-light mb-3">Join Our Whatsapp Group</h5> */}
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <h5 className="fw-light mb-3">Follow Us</h5>
                          <div>
                            <ul className="list-unstyled d-flex">
                              <li>
                                <a id="facebook" href="https://www.facebook.com/briesclothingboutique?mibextid=ZbWKwL" className="text-white text-decoration-none text-muted fs-4 me-4">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a id="whatsapp" href="https://wa.me/03343701098" className="text-white text-decoration-none text-muted fs-4 me-4">
                                  <i className="fab fa-whatsapp" />
                                </a>
                              </li>
                              <li>
                                <a id="instagram" href="https://instagram.com/briesboutique2?igshid=MDM4ZDc5MmU=" className="text-white text-decoration-none text-muted fs-4 me-4">
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                              <li>
                                <a id="youtube" href="https://www.youtube.com/@briesboutique" className="text-white text-decoration-none text-muted fs-4 me-4">
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </footer>
  )
}
export default Footer;