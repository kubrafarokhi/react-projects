import { BUY_CAKE } from "./cakesTypes"
const initialState = {
    numberofCakes: 10
}

const cakesReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberofCakes: state.numberofCakes - action.payload
        } 
        default: return state
    }     
}
export default cakesReducer;