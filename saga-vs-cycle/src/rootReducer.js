import { combineReducers } from 'redux';
import cartReducer from './containers/Cart/reducer'

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;
