import { Fragment } from 'react'
import './shoppage.css'
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../../components/productCard'
import {getProduct} from '../../actions/ProductAction'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Shoppage = (props) => {
    const dispatch = useDispatch();
    const { loading, error, products, productCount } = props;
    
    console.log(props);
    
const keyword =props.match.params.keyword

    useEffect(()=>{
    dispatch(getProduct());
    },[dispatch,keyword])

    return(
    <div className="cart" style={{"margin-top": "100px"}}>
        <div className="container-fluid bg-secondary mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop</h1>
            <div className="d-inline-flex">
              <p className="m-0"><a href>Home</a></p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Shop</p>
            </div>
          </div>
        </div>

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
                products && products.map((product)=><ProductCard product={product}/>)
              }
            </div>
        </div>
        </div>
        </section>
    </div>
)}

function mapStateToProps(state) {
    const { loading, error, products, productCount } = state.products;
    console.log(products);
  
    return { loading: loading, error: error, products: products, productCount: productCount }
  }
  
export default connect(mapStateToProps)(Shoppage)
  