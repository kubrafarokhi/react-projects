import {BUY_ICECREAM} from './iceCreamTypes';

const initialState = {
    numofIcecreams : 10
}

const iceCreamReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: 
        return {
            ...state,
            numofIcecreams: state.numofIcecreams - action.payload
        }
        default: return state
    }
}

export default iceCreamReducer;