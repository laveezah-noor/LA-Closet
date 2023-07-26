
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../actions/CartAction";

const ProductCard = ({product}) => {
    const title = product.title;
    const stars = product.rating;
    console.log(product)
    const imageUrl = product.images[0].url
    const price = product.price

    const dispatch = useDispatch();
  // const alert = useAlert();

    const addToCartHandler = () => {
      // dispatch(addItemsToCart(match.params.id, quantity));
      console.log()
      dispatch(addItemsToCart(product._id, 1));
      alert("Item Added To Cart");
    };
  
    return(
        <div className="col-md-6 col-lg-4 col-xl-3 p-2 best" key={product._id}>
                <div className="collection-img position-relative">
                  <img src={imageUrl} className="w-100" />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                  {Array.from(Array(stars), (e, i) => {
                    return <span key={i} className="text-primary"><i className="fas fa-star" /></span>
                    })}
                    {/* <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span>
                    <span className="text-primary"><i className="fas fa-star" /></span> */}
                  </div>
                  <p className="text-capitalize my-1">{title}</p>
                  <span className="fw-bold d-block">PKR. {price}</span>
                  <button className="btn btn-primary my-2"
                  onClick={addToCartHandler}>Buy Now</button>
                </div>
              </div>
    )
}

export default ProductCard;