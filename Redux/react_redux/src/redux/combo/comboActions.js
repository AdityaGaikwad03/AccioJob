import { COMBO } from "./comboType";

export const combo = (quantity) => {
    return{
        type: COMBO,
        payload: quantity
    }
}