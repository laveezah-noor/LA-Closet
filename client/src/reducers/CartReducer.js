import {
  ADD_TO_CART,
  // REMOVE_CART_ITEM,
  // SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

export default function cartReducer (
  state = { cartItems: [], shippingInfo: {} },
  action
) {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    // case REMOVE_CART_ITEM:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter((i) => i.product !== action.payload),
    //   };

    // case SAVE_SHIPPING_INFO:
    //   return {
    //     ...state,
    //     shippingInfo: action.payload,
    //   };

    default:
      return state;
  }
};

// import {
//     POST_CART,
//     POST_CART_SUCCESS,
//     POST_CART_FAIL,
//     GET_CART_BY_USERID,
//     GET_CART_BY_USERID_SUCCESS,
//     GET_CART_BY_USERID_FAIL
//   } from "../constants/cartConstants";
  
//   const initialState = {
//     cart: {},
//     loading: false,
//     error: {}
//   };
  
//   export default (state = initialState, action) => {
//     switch (action.type) {
//       case POST_CART:
//         return {
//           ...state,
//           loading: true,
//           error: {}
//         };
//       case POST_CART_SUCCESS:
//         return {
//           ...state,
//           cart: action.payload.data.cart,
//           loading: false
//         };
//       case POST_CART_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload.error.response.data
//         };
//       case GET_CART_BY_USERID:
//         return {
//           ...state,
//           loading: true,
//           error: {}
//         };
//       case GET_CART_BY_USERID_SUCCESS:
//         return {
//           ...state,
//           cart: action.payload.data.cart,
//           loading: false
//         };
//       case GET_CART_BY_USERID_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload.error.response.data
//         };
//       default:
//         return state;
//     }
//   };