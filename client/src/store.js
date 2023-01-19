import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {productReducer} from './reducers/ProductReducer';

const reducer = combineReducers({
    products: productReducer,
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