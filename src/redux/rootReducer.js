import {combineReducers} from 'redux';
import cakesReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCreams/iceCreamReducer';
import userReducer from './userAsync/userReducer';

const rootReducer = combineReducers({
    cake: cakesReducer,
    icecream: iceCreamReducer,
    user: userReducer
})

export default rootReducer;