import { BUY_CAKE } from "./cakeType"
import {COMBO} from "../combo/comboType"

const initialState = {
    numOfCakes: 20
}
const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state, numOfCakes: state.numOfCakes - action.payload
            }
        case COMBO:
            return{
                ...state, numOfCakes: state.numOfCakes - action.payload
            }
        default:
            return state
    }
}

export default cakeReducer;