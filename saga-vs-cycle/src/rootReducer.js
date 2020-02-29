import { combineReducers } from 'redux';
import cartReducer from './containers/Cart/reducer'

const rootReducer = () => combineReducers({
    cartReducer: cartReducer,
});

export default rootReducer;
