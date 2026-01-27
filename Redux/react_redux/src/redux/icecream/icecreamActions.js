import { BUY_ICECREAM } from "./icecreamType";

export const buyIceCream = (quantity) => {
    return{
        type: BUY_ICECREAM,
        payload: quantity
    }
}