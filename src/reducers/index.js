import {combineReducers} from 'redux';
import ReducerCart from "./reducerCart";

const rootReducer = combineReducers({
    carts: ReducerCart,
})

export default rootReducer;