import { BUY_CAKE } from "./cakeType";

export const buyCake = (quantity) => {
    return{
        type: BUY_CAKE,
        payload: quantity
    }
}