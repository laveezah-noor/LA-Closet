import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CartReducer from './reducers/CartReducer';
import {productReducer} from './reducers/ProductReducer';

const reducer = combineReducers({
    products: productReducer,
    cart: CartReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        shippingInfo: localStorage.getItem("shippingInfo")
          ? JSON.parse(localStorage.getItem("shippingInfo"))
          : {},
      },
};

const middelware = [thunk];

const store = 
createStore(
    reducer,
    initialState,
    applyMiddleware(...middelware)
)

export default store;