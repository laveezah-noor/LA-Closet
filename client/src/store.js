import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CartReducer from './reducers/CartReducer';
import {productReducer} from './reducers/ProductReducer';

const reducer = combineReducers({
    products: productReducer,
    cart: CartReducer
})

let initialState = {};

const middelware = [thunk];

const store = 
createStore(
    reducer,
    initialState,
    applyMiddleware(...middelware)
)

export default store;