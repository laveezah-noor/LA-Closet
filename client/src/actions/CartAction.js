import {
  ADD_QTY_ITEM, ADD_TO_CART,
  CLEAR_CART,
  MINUS_QTY_ITEM, REMOVE_FROM_CART,
  SET_CART_ITEMS
} from '../constants/cartConstants';

import {
  // ADD_TO_CART,
  // REMOVE_CART_ITEM,
  // SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/api/vi/product/${id}`);
  
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.data._id,
      name: data.data.title,
      price: data.data.price,
      image: data.data.images[0].url,
      stock: data.data.stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
// export const removeItemsFromCart = (id) => async (dispatch, getState) => {
//   dispatch({
//     type: REMOVE_CART_ITEM,
//     payload: id,
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// // SAVE SHIPPING INFO
// export const saveShippingInfo = (data) => async (dispatch) => {
//   dispatch({
//     type: SAVE_SHIPPING_INFO,
//     payload: data,
//   });

//   localStorage.setItem("shippingInfo", JSON.stringify(data));
// };

export const setCartItems = (items = []) => ({
  type: SET_CART_ITEMS,
  payload: items
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const addQtyItem = (id) => ({
  type: ADD_QTY_ITEM,
  payload: id
});

export const minusQtyItem = (id) => ({
  type: MINUS_QTY_ITEM,
  payload: id
});
