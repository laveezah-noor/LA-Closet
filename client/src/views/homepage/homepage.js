import './homepage.css'
import React, { useEffect } from 'react'
import Product from '../../components/product'
import { connect } from 'react-redux'
import {getProduct} from '../../actions/ProductAction'
import {useDispatch, useSelector} from 'react-redux';

const Home = (props) => {
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = props;
  // useSelector(
  //   (state) => state.products,
  //   (state) => state.loading,
  //   (state) => state.productCount,
  //   (state) => state.error,
  // );

  useEffect(()=>{
    dispatch(
      getProduct()
      );
  }, [dispatch]);
  console.log(products,productCount,loading,error);

  console.log(props);


  return (
    <div className='home'>
      <span id="header" />
      <div className="down-main">
        <a className="up text-white" href="#header"><i className="fa-solid fa-arrow-up" /></a>
        <a className="down text-white" href="#footer"><i className="fa-solid fa-arrow-down" /></a>
      </div>

      {/* header */}
      <header id="header" className="vh-100 carousel slide" data-bs-ride="carousel" style={{ paddingTop: '104px' }}>
        <div className="container h-100 d-flex align-items-center carousel-inner">
          <div className="text-center carousel-item active">
            <h2 className="text-capitalize text-white">best collection</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">new arrivals</h1>
            <a href="#footer" className="btn mt-3 text-uppercase">shop now</a>
          </div>
          <div className="text-center carousel-item">
            <h2 className="text-capitalize text-white">best price &amp; offer</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">new season</h1>
            <a href="#footer" className="btn mt-3 text-uppercase">buy now</a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </header>
      {/* end of header */}
      {/* collection */}
      <section id="collection" className="py-5">
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">New Collection</h2>
          </div>
          <div className="row g-0">
            <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
              <button type="button" className="btn m-2 text-dark active-filter-btn" data-filter="*">All</button>
              <button type="button" className="btn m-2 text-dark" data-filter=".best">Best Sellers</button>
              <button type="button" className="btn m-2 text-dark" data-filter=".feat">Featured</button>
              <button type="button" className="btn m-2 text-dark" data-filter=".new">New Arrival</button>
            </div>
            <div className="collection-list mt-4 row gx-0 gy-3">
              {
                products && products.map((product)=><Product product={product}/>)
              }
              {/* <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                <div className="collection-img position-relative">
                  <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/files/Navigation_Image_475x_380x_f7c98982-8fd4-457b-b589-7dd9229a2467_475x.webp?v=1670236365" className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold d-block">$ 45.50</span>
                  <a href="#footer" className="btn btn-primary my-2">Buy Now</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div className="collection-img position-relative">
                  <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/files/Navigation-Image-min_4cd94f37-abe8-4ca1-b801-4e8997922de8_380x.jpg?v=1671445622" className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold d-block">$ 45.50</span>
                  <a href="#footer" className="btn btn-primary my-2">Buy Now</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
                <div className="collection-img position-relative">
                  <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/files/DUSKY_NUT_-3_PC_SDWT223P01_a47f33c3-f079-4cea-8a28-198c04e561e9_475x.jpg?v=1670236238" className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold d-block">$ 45.50</span>
                  <a href="#footer" className="btn btn-primary my-2">Buy Now</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                <div className="collection-img position-relative">
                  <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/files/SCWO223P14-BLACKB_380x_3194bdd8-0e71-49c8-8aef-d29837e1b8ca_475x.jpg?v=1670066979" className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold d-block">$ 45.50</span>
                  <a href="#footer" className="btn btn-primary my-2">Buy Now</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div className="collection-img position-relative">
                  <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/files/NA_Womens_Nav_Image-min_475x.jpg?v=1667813840" className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold d-block">$ 45.50</span>
                  <a href="#footer" className="btn btn-primary my-2">Buy Now</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
                <div className="collection-img position-relative">
                  <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/files/anmol_image_380x.jpg?v=1671171792" className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold d-block">$ 45.50</span>
                  <a href="#footer" className="btn btn-primary my-2">Buy Now</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                <div className="collection-img position-relative">
                  <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/files/Nazakat_de8b6cf3-ac3f-465e-8c69-ba512cd45ff1_380x.jpg?v=1671171353 " className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold d-block">$ 45.50</span>
                  <a href="#footer" className="btn btn-primary my-2">Buy Now</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div className="collection-img position-relative">
                  <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/files/Chamak_dhamak_380x.jpg?v=1672377342" className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold d-block">$ 45.50</span>
                  <a href="#footer" className="btn btn-primary my-2">Buy Now</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* end of collection */}
      {/* special products */}
      <section id="special" className="py-5">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">Special Selection</h2>
          </div>
          <div className="special-list row g-0">
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/products/WSS223P08-MAR00Nb_360x.jpg?v=1671449597" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <i className="fas fa-heart" />
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">MAROON-VELVET-3-PIECE-SUIT</p>
                <span className="fw-bold d-block"><span className="span">PKR. 16,980</span></span>
                <a href="#footer" className="btn btn-primary mt-3">Buy Now</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/products/WAS223P09-BLUE_89bef6af-f937-46ba-aaad-608f55a9501c_360x.jpg?v=1671789114" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <i className="fas fa-heart" />
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">BLUE-VELVET-3-PIECE-SUIT</p>
                <span className="fw-bold d-block"><span className="span">PKR. 18,980</span></span>
                <a href="#footer" className="btn btn-primary mt-3">Buy Now</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/products/WSS223P09-D-PURPLEb_79094f21-bda9-4edc-9c91-63d6816710c4_360x.jpg?v=1671444399" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <i className="fas fa-heart" />
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">D-PURPLE-VELVET-3-PIECE-SUIT</p>
                <span className="fw-bold d-block"><span className="span">PKR. 18,480</span></span>
                <a href="#footer" className="btn btn-primary mt-3">Buy Now</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img alt='' src="https://cdn.shopify.com/s/files/1/0464/1731/3955/products/WSS223P22-GREEN_30591647-c84f-4607-8e00-2be71731605d_360x.jpg?v=1671789132" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <i className="fas fa-heart" />
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">GREEN-VELVET-3-PIECE-SUIT</p>
                <span className="fw-bold d-block"><span className="span">PKR. 16,980</span></span>
                <a href="#footer" className="btn btn-primary mt-3">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of special products */}
      {/* blogs */}
      <section id="offers" className="py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
            <div className="offers-content">
              <span className="text-white">Discount Up To 40%</span>
              <h2 className="mt-2 mb-4 text-white">Grand Sale Offer!</h2>
              <a href="#footer" className="btn">Buy Now</a>
            </div>
          </div>
        </div>
      </section>
      {/* end of blogs */}
      {/* Video */}
      <div className="container-fluid my-5">
        <div className="row">
          <video width="90%" height={500} controls>
            <source src="https://cdn.shopify.com/videos/c/o/v/7d67102c21124d079d170e1174e48e78.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* Video */}
      {/* blogs */}
      {/* <section id = "blogs" class = "py-5">
                  <div class = "container">
                      <div class = "title text-center py-5">
                          <h2 class = "position-relative d-inline-block">Our Latest Blog</h2>
                      </div>
          
                      <div class = "row g-3">
                          <div class = "card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                              <img alt='' src = "images/blog_1.jpg" alt = "">
                              <div class = "card-body px-0">
                                  <h4 class = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
                                  <p class = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
                                  <p class = "card-text">
                                      <small class = "text-muted">
                                          <span class = "fw-bold">Author: </span>John Doe
                                      </small>
                                  </p>
                                  <a href = "#" class = "btn">Read More</a>
                              </div>
                          </div>
          
                          <div class = "card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                              <img alt='' src = "images/blog_2.jpg" alt = "">
                              <div class = "card-body px-0">
                                  <h4 class = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
                                  <p class = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
                                  <p class = "card-text">
                                      <small class = "text-muted">
                                          <span class = "fw-bold">Author: </span>John Doe
                                      </small>
                                  </p>
                                  <a href = "#" class = "btn">Read More</a>
                              </div>
                          </div>
          
                          <div class = "card border-0 col-md-6 col-lg-4 bg-transparent my-3">
                              <img alt='' src = "images/blog_3.jpg" alt = "">
                              <div class = "card-body px-0">
                                  <h4 class = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
                                  <p class = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
                                  <p class = "card-text">
                                      <small class = "text-muted">
                                          <span class = "fw-bold">Author: </span>John Doe
                                      </small>
                                  </p>
                                  <a href = "#" class = "btn">Read More</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section> */}
      {/* end of blogs */}
      {/* about us */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row gy-lg-5 align-items-center">
            <div className="col-lg-6 order-lg-1 g-1 text-center text-lg-start">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block ms-4">About Us</h2>
              </div>
              <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi
                exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium
                velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
            </div>
            <div className="col-lg-6 order-lg-0">
              <img id="about-us" src="logo.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* end of about us */}
      {/* popular */}
      <section id="popular" className="py-5">
        <div className="container">
          <div className="title text-center pt-3 pb-5">
            <h2 className="position-relative d-inline-block ms-4">Popular Of This Year</h2>
          </div>
          <div className="row popular">
            <div className="col-md-6 col-lg-4 row g-3">
              <h3 className="fs-5">Top Rated</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/UO-2115-5C_3_706fe360-de2b-4fa6-bd8d-0f89ff2d2d5a-min_800x.jpg?v=1672137178" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/UB-2124-7B_1_800x.jpg?v=1646979497" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/UB-2125-1B_3_800x.jpg?v=1646740230" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 row g-3">
              <h3 className="fs-5">Best Selling</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/000A0039_800x.jpg?v=1663221062" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/UB-2106-1A_edback_15485553-0187-4ea9-8704-f430b3e53907_800x.jpg?v=1646740502" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/22103-21C_01_800x.jpg?v=1668248355" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 row g-3">
              <h3 className="fs-5">On Sale</h3>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/UB-2109-3C-1_bc8c20ce-dd2b-435f-a5b1-49aad835f1bb_800x.jpg?v=1623332224" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/22102-4C_06_800x.jpg?v=1663221513" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-start">
                <img src="https://cdn.shopify.com/s/files/1/0184/5074/3360/products/UG-2104-7A_3_0a6d42b4-1069-499b-8ed2-0f8025cf56c9_800x.jpg?v=1647239271" alt="" className="img-fluid mx-1 pe-1 w-25" />
                <div>
                  <p className="mb-0">Blue Shirt</p>
                  <span>$ 20.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of popular */}
      {/* newsletter */}
      <section id="newsletter" className="py-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="title text-center pt-3 pb-5">
              <h2 className="position-relative d-inline-block ms-4">Newsletter Subscription</h2>
            </div>
            <p className="text-center text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem
              officia accusantium maiores quisquam dolorum?</p>
            <div className="input-group mb-3 mt-3">
              <input type="text" className="form-control" placeholder="Enter Your Email ..." />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      {/* end of newsletter */}
      {/* footer */}

    </div>
  );
};

// const homepage = () => {
//   return (
//     <div>


//       {/* <!-- Benefits --> */}
//       <div class="Benefits">
//         <h1>Why Shop With Us ?</h1> <br />
//         <div class="row">
//           <div class="col">
//             <ul>
//               <li>
//                 <img src="truck.gif" alt="" height="50px" width="50px" />
//                 <h3>Fast Delivery</h3> <br />
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, impedit!</p>
//               </li>
//               <li>
//                 <img src="shipping.gif" alt="" height="50px" width="50px" />
//                 <h3>Free Shipping</h3> <br />
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, impedit!</p>
//               </li>
//               <li>
//                 <img src="medal-.gif" alt="" height="50px" width="50px" />
//                 <h3>Best Quality</h3> <br />
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, impedit!</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Categories --> */}
//       <div class="category">
//         <h1>CATEGORIES</h1>
//         <div class="category1">
//           <h2>MEN</h2>
//         </div>
//         <div class="category1">
//           <h2>WOMEN</h2>
//         </div>
//         <div class="category1">
//           <h2>KID</h2>
//         </div>
//       </div>

//     </div>
//   )
// }

// homepage.propTypes = {
//   second: PropTypes.third
// }
function mapStateToProps(state) {
  const { loading, error, products, productCount } = state.products;
  console.log(products);

  return { loading: loading, error: error, products: products, productCount: productCount }
}

export default connect(mapStateToProps)(Home)
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(homepage)