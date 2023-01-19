import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCT_BEGIN,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    GET_PRODUCTS_BY_CATEGORY_BEGIN,
    GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    GET_PRODUCTS_BY_CATEGORY_FAIL,
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    // APPLY_FILTERS_BEGIN,
    // APPLY_FILTERS_SUCCESS,
    // APPLY_FILTERS_FAIL
  } from "../constants/productConstants";
  
  const initialState = {
    products: null,
    productCount: null,
    loading: false,
    error: null
  };
  
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state,
          loading: true,
          error: null,
          products: [],
          productCount: 0
        };
      case GET_PRODUCTS_SUCCESS:
      console.log(action.payload.data,action.payload.productCount)  
      return {
          ...state,
          loading: false,
          products: action.payload.data,
          productCount: action.payload.productCount
        };
      case GET_PRODUCTS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      // case GET_PRODUCT_BEGIN:
      //   return {
      //     ...state,
      //     loading: true,
      //     error: null
      //   };
      // case GET_PRODUCT_SUCCESS:
      //   return {
      //     ...state,
      //     loading: false,
      //     product: action.payload.data.product
      //   };
      // case GET_PRODUCT_FAIL:
      //   return {
      //     ...state,
      //     loading: false,
      //     error: action.payload.error.response.data
      //   };
      // case GET_PRODUCTS_BY_CATEGORY_BEGIN:
      //   return {
      //     ...state,
      //     loading: true,
      //     error: null
      //   };
      // case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      //   return {
      //     ...state,
      //     loading: false,
      //     products: action.payload.data.products
      //   };
      // case GET_PRODUCTS_BY_CATEGORY_FAIL:
      //   return {
      //     ...state,
      //     loading: false,
      //     error: action.payload.error.response.data
      //   };
      // case SEARCH_BEGIN:
      //   return {
      //     ...state,
      //     loading: true,
      //     error: null
      //   };
      // case SEARCH_SUCCESS:
      //   return {
      //     ...state,
      //     loading: false,
      //     products: action.payload.data.products
      //   };
      // case SEARCH_FAIL:
      //   return {
      //     ...state,
      //     loading: false,
      //     error: action.payload.error.response.data
      //   };
      // case APPLY_FILTERS_BEGIN:
      //   return {
      //     ...state,
      //     loading: true,
      //     error: null
      //   };
      // case APPLY_FILTERS_SUCCESS:
      //   return {
      //     ...state,
      //     loading: false,
      //     products: action.payload.data.products
      //   };
      // case APPLY_FILTERS_FAIL:
      //   return {
      //     ...state,
      //     loading: false,
      //     error: action.payload.error.response.data
      //   };
      default:
        return state;
    }
  };
