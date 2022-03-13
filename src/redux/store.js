import {createStore} from 'redux';
import cakesReducer from './cakes/cakeReducer';

const store = createStore(cakesReducer);

export default store;