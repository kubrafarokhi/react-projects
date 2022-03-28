import {BUY_ICECREAM} from './iceCreamTypes';

export const buyIcecream = (number = 1) =>{
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}